<?php
#
# Markdown Extra  -  A text-to-HTML conversion tool for web writers
#
#
# Markdown: Créma
# Copyright (c) 2013 Chen Yijun
# <http://ethantw.net/projects/markdown-crema/>
#
# PHP Markdown Extra
# Copyright (c) 2004-2013 Michel Fortin  
# <http://michelf.com/projects/php-markdown/>
#
# Original Markdown
# Copyright (c) 2004-2006 John Gruber  
# <http://daringfireball.net/projects/markdown/>
#
namespace Michelf;


# Just force Michelf/Markdown.php to load. This is needed to load
# the temporary implementation class. See below for details.
\Michelf\MarkdownExtra::MARKDOWNLIB_VERSION;

#
# Markdown Extra Parser Class
#
# Note: Currently the implementation resides in the temporary class
# \Michelf\MarkdownExtra_TmpImpl (in the same file as \Michelf\Markdown).
# This makes it easier to propagate the changes between the three different
# packaging styles of PHP Markdown. Once this issue is resolved, the
# _MarkdownExtra_TmpImpl will disappear and this one will contain the code.
#

class MarkdownCrema extends \Michelf\_MarkdownExtra_TmpImpl {

	# Change to ">" for HTML output.
	public $empty_element_suffix = ">";

	# Tags which must not have their contents modified, no matter where 
	# they appear:
	protected $clean_tags_re = 'script|style|math|svg';


	public function __construct() {
	#
	# Constructor function. Initialize the parser object.
	#

		$this->prepareUnderlineAndMark();

		# Add extra escapable characters before parent constructor 
		# initialize the table.
		$this->escape_chars .= '';
		
		# Insert extra document, block, and span transformations. 
		# Parent constructor will do the sorting.
		$this->document_gamut += array(
			//"stripExtraAttributes" 	=> 60,
			);
		$this->block_gamut += array(
			);
		$this->span_gamut = array(
		#
		# These are all the transformations that occur *within* block-level
		# tags like paragraphs, headers, and list items.
		#
			# Process character escapes, code spans, and inline HTML
			# in one shot.
			"parseSpan"           => -30,

			# Process anchor and image tags. Images must come first,
			# because ![foo][f] looks like an anchor.
			"doImages"            =>  10,
			"doAnchors"           =>  20,
			
			# Make links out of things like `<http://example.com/>`
			# Must come after doAnchors, because you can use < and >
			# delimiters in inline links like [this](<url>).
			"doAutoLinks"         =>  30,
			"encodeAmpsAndAngles" =>  40,

			//"doItalicsAndBold"  =>  50,
			"doHardBreaks"        =>  60,


			### Markdown Extra ###
			"doFootnotes"        => 5,
			"doAbbreviations"    => 70,

			### Markdown: Créma ###
			"stripExtraAttributes"	=> 5,
			"doUnderlineAndMark"    => 6,
			"doItalicsAndBold"      => 7,
			"doVoiceAlter"    		=> 10,
			"doKeyword"    			=> 12,
			"doSpans"				=> 15,
			);
		
		parent::__construct();
	}


	protected $abbr_attr = array();
	
	protected function setup() {
	#
	# Setting up Extra-specific variables.
	#
		parent::setup();

		$this->abbr_attr = array();
	}
	
	protected function teardown() {
	#
	# Clearing Extra-specific variables.
	#
		$this->abbr_attr = array();
		
		parent::teardown();
	}


	#
	# 取消底線（_）的強調、重點功能
	#
	protected $em_relist = array(
		''  => '(?:(?<!\*)\*(?!\*))(?=\S|$)(?![\.,:;]\s)',
		'*' => '(?<=\S|^)(?<!\*)\*(?!\*)',
		);
	protected $strong_relist = array(
		''   => '(?:(?<!\*)\*\*(?!\*))(?=\S|$)(?![\.,:;]\s)',
		'**' => '(?<=\S|^)(?<!\*)\*\*(?!\*)',
		);
	protected $em_strong_relist = array(
		''    => '(?:(?<!\*)\*\*\*(?!\*))(?=\S|$)(?![\.,:;]\s)',
		'***' => '(?<=\S|^)(?<!\*)\*\*\*(?!\*)',
		);

	protected function doItalicsAndBold($text) {
		$token_stack = array('');
		$text_stack = array('');
		$em = '';
		$strong = '';
		$tree_char_em = false;
		
		while (1) {
			#
			# Get prepared regular expression for seraching emphasis tokens
			# in current context.
			#
			$token_re = $this->em_strong_prepared_relist["$em$strong"];
			
			#
			# Each loop iteration search for the next emphasis token. 
			# Each token is then passed to handleSpanToken.
			#
			$parts = preg_split($token_re, $text, 2, PREG_SPLIT_DELIM_CAPTURE);
			$text_stack[0] .= $parts[0];
			$token =& $parts[1];
			$text =& $parts[2];
			
			if (empty($token)) {
				# Reached end of text span: empty stack without emitting.
				# any more emphasis.
				while ($token_stack[0]) {
					$text_stack[1] .= array_shift($token_stack);
					$text_stack[0] .= array_shift($text_stack);
				}
				break;
			}
			
			$token_len = strlen($token);
			if ($tree_char_em) {
				# Reached closing marker while inside a three-char emphasis.
				if ($token_len == 3) {
					# Three-char closing marker, close em and strong.
					array_shift($token_stack);
					$span = array_shift($text_stack);
					$span = $this->runSpanGamut($span);
					$processed_result = $this->_processingAttr($span);
					$span = $processed_result['span'];
					$attr = $processed_result['attr'];

					$span = "<strong$attr><em>$span</em></strong>";
					$text_stack[0] .= $this->hashPart($span);
					$em = '';
					$strong = '';
				} else {
					# Other closing marker: close one em or strong and
					# change current token state to match the other
					$token_stack[0] = str_repeat($token{0}, 3-$token_len);
					$tag = $token_len == 2 ? "strong" : "em";
					$span = $text_stack[0];
					$span = $this->runSpanGamut($span);
					$processed_result = $this->_processingAttr($span);
					$span = $processed_result['span'];
					$attr = $processed_result['attr'];

					$span = "<$tag$attr>$span</$tag>";
					$text_stack[0] = $this->hashPart($span);
					$$tag = ''; # $$tag stands for $em or $strong
				}
				$tree_char_em = false;
			} else if ($token_len == 3) {
				if ($em) {
					# Reached closing marker for both em and strong.
					# Closing strong marker:
					for ($i = 0; $i < 2; ++$i) {
						$shifted_token = array_shift($token_stack);
						$tag = strlen($shifted_token) == 2 ? "strong" : "em";
						$span = array_shift($text_stack);
						$span = $this->runSpanGamut($span);
						$processed_result = $this->_processingAttr($span);
						$span = $processed_result['span'];
						$attr = $processed_result['attr'];

						$span = "<$tag$attr>$span</$tag>";
						$text_stack[0] .= $this->hashPart($span);
						$$tag = ''; # $$tag stands for $em or $strong
					}
				} else {
					# Reached opening three-char emphasis marker. Push on token 
					# stack; will be handled by the special condition above.
					$em = $token{0};
					$strong = "$em$em";
					array_unshift($token_stack, $token);
					array_unshift($text_stack, '');
					$tree_char_em = true;
				}
			} else if ($token_len == 2) {
				if ($strong) {
					# Unwind any dangling emphasis marker:
					if (strlen($token_stack[0]) == 1) {
						$text_stack[1] .= array_shift($token_stack);
						$text_stack[0] .= array_shift($text_stack);
					}
					# Closing strong marker:
					array_shift($token_stack);
					$span = array_shift($text_stack);
					$span = $this->runSpanGamut($span);
					$processed_result = $this->_processingAttr($span);
					$span = $processed_result['span'];
					$attr = $processed_result['attr'];

					$span = "<strong$attr>$span</strong>";
					$text_stack[0] .= $this->hashPart($span);
					$strong = '';
				} else {
					array_unshift($token_stack, $token);
					array_unshift($text_stack, '');
					$strong = $token;
				}
			} else {
				# Here $token_len == 1
				if ($em) {
					if (strlen($token_stack[0]) == 1) {
						# Closing emphasis marker:
						array_shift($token_stack);
						$span = array_shift($text_stack);
						$span = $this->runSpanGamut($span);
						$processed_result = $this->_processingAttr($span);
						$span = $processed_result['span'];
						$attr = $processed_result['attr'];

						$span = "<em$attr>$span</em>";
						$text_stack[0] .= $this->hashPart($span);
						$em = '';
					} else {
						$text_stack[0] .= $token;
					}
				} else {
					array_unshift($token_stack, $token);
					array_unshift($text_stack, '');
					$em = $token;
				}
			}
		}
		return $text_stack[0];
	}



	#
	# 加入底線（_）的註記、凸顯功能
	#
	protected $u_relist = array(
		''  => '(?:(?<!_)_(?!_))(?=\S|$)(?![\.,:;]\s)',
		'_' => '(?<=\S|^)(?<!_)_(?!_)',
		);
	protected $mark_relist = array(
		''   => '(?:(?<!_)__(?!_))(?=\S|$)(?![\.,:;]\s)',
		'__' => '(?<=\S|^)(?<!_)__(?!_)',
		);
	protected $u_mark_relist = array(
		''    => '(?:(?<!_)___(?!_))(?=\S|$)(?![\.,:;]\s)',
		'___' => '(?<=\S|^)(?<!_)___(?!_)',
		);
	protected $u_mark_prepared_relist;


	protected function prepareUnderlineAndMark() {
	#
	# Prepare regular expressions for searching underline tokens in any
	# context.
	#
		foreach ($this->u_relist as $u => $u_re) {
			foreach ($this->mark_relist as $mark => $mark_re) {
				# Construct list of allowed token expressions.
				$token_relist = array();
				if (isset($this->u_mark_relist["$u$mark"])) {
					$token_relist[] = $this->u_mark_relist["$u$mark"];
				}
				$token_relist[] = $u_re;
				$token_relist[] = $mark_re;
				
				# Construct master expression from list.
				$token_re = '{('. implode('|', $token_relist) .')}';
				$this->u_mark_prepared_relist["$u$mark"] = $token_re;
			}
		}
	}
	
	protected function doUnderlineAndMark($text) {
		$token_stack = array('');
		$text_stack = array('');
		$u = '';
		$mark = '';
		$tree_char_u = false;
		
		while (1) {
			#
			# Get prepared regular expression for seraching underline tokens
			# in current context.
			#
			$token_re = $this->u_mark_prepared_relist["$u$mark"];
			
			#
			# Each loop iteration search for the next underline token. 
			# Each token is then passed to handleTextLevelSpanToken.
			#
			$parts = preg_split($token_re, $text, 2, PREG_SPLIT_DELIM_CAPTURE);
			$text_stack[0] .= $parts[0];
			$token =& $parts[1];
			$text =& $parts[2];
			
			if (empty($token)) {
				# Reached end of text span: empty stack without emitting
				# any more emphasis.
				while ($token_stack[0]) {
					$text_stack[1] .= array_shift($token_stack);
					$text_stack[0] .= array_shift($text_stack);
				}
				break;
			}
			
			$token_len = strlen($token);
			if ($tree_char_u) {
				# Reached closing marker while inside a three-char underline.
				if ($token_len == 3) {
					# Three-char closing marker, close u and mark.
					array_shift($token_stack);
					$span = array_shift($text_stack);
					$span = $this->runSpanGamut($span);
					$processed_result = $this->_processingAttr($span);
					$span = $processed_result['span'];
					$attr = $processed_result['attr'];

					$span = "<mark$attr><u>$span</u></mark>";
					$text_stack[0] .= $this->hashPart($span);
					$u = '';
					$mark = '';
				} else {
					# Other closing marker: close one em or strong and
					# change current token state to match the other
					$token_stack[0] = str_repeat($token{0}, 3-$token_len);
					$tag = $token_len == 2 ? "mark" : "u";
					$span = $text_stack[0];
					$span = $this->runSpanGamut($span);
					$processed_result = $this->_processingAttr($span);
					$span = $processed_result['span'];
					$attr = $processed_result['attr'];

					$span = "<$tag$attr>$span</$tag>";
					$text_stack[0] = $this->hashPart($span);
					$$tag = ''; # $$tag stands for $u or $mark
				}
				$tree_char_u = false;
			} else if ($token_len == 3) {
				if ($u) {
					# Reached closing marker for both u and mark.
					# Closing strong marker:
					for ($i = 0; $i < 2; ++$i) {
						$shifted_token = array_shift($token_stack);
						$tag = strlen($shifted_token) == 2 ? "mark" : "u";
						$span = array_shift($text_stack);
						$span = $this->runSpanGamut($span);
						$processed_result = $this->_processingAttr($span);
						$span = $processed_result['span'];
						$attr = $processed_result['attr'];

						$span = "<$tag$attr>$span</$tag>";
						$text_stack[0] .= $this->hashPart($span);
						$$tag = ''; # $$tag stands for $u or $mark
					}
				} else {
					# Reached opening three-char underline marker. Push on token 
					# stack; will be handled by the special condition above.
					$u = $token{0};
					$mark = "$u$u";
					array_unshift($token_stack, $token);
					array_unshift($text_stack, '');
					$tree_char_u = true;
				}
			} else if ($token_len == 2) {
				if ($mark) {
					# Unwind any dangling emphasis marker:
					if (strlen($token_stack[0]) == 1) {
						$text_stack[1] .= array_shift($token_stack);
						$text_stack[0] .= array_shift($text_stack);
					}
					# Closing strong marker:
					array_shift($token_stack);
					$span = array_shift($text_stack);
					$span = $this->runSpanGamut($span);
					$processed_result = $this->_processingAttr($span);
					$span = $processed_result['span'];
					$attr = $processed_result['attr'];

					$span = "<mark$attr>$span</mark>";
					$text_stack[0] .= $this->hashPart($span);
					$mark = '';
				} else {
					array_unshift($token_stack, $token);
					array_unshift($text_stack, '');
					$mark = $token;
				}
			} else {
				# Here $token_len == 1
				if ($u) {
					if (strlen($token_stack[0]) == 1) {
						# Closing underline marker:
						array_shift($token_stack);
						$span = array_shift($text_stack);
						$span = $this->runSpanGamut($span);
						$processed_result = $this->_processingAttr($span);
						$span = $processed_result['span'];
						$attr = $processed_result['attr'];

						$span = "<u$attr>$span</u>";
						$text_stack[0] .= $this->hashPart($span);
						$u = '';
					} else {
						$text_stack[0] .= $token;
					}
				} else {
					array_unshift($token_stack, $token);
					array_unshift($text_stack, '');
					$u = $token;
				}
			}
		}

		return $text_stack[0];
	}

	protected function _processingAttr($text) {
		$result = array();

		$result['attr'] = ( preg_match('{.*(?:[ ]{1}\[\!\!\!\]'.$this->id_class_attr_catch_re.' ){1}$}xs', $text) ) ?
			preg_replace_callback('{.*(?:[ ]{1}\[\!\!\!\]'.$this->id_class_attr_catch_re.' ){1}$}xs',
				array(&$this, '_processingAttr_callback'), $text) : '';

		$result['span'] = preg_replace('{(?:[ ]{1}\[\!\!\!\]'.$this->id_class_attr_catch_re.' ){1}$}xs',
			'', $text);

		return $result;
	}

	protected function _processingAttr_callback($matches) {
		return $this->doExtraAttributes('span', $dummy =& $matches[1]);
	}



	### Extra Attribute Parser ###

	# Expression to use to catch attributes (includes the braces)
	protected $id_class_attr_catch_re = '\{((?:[ ]*[#.:][-_:a-zA-Z0-9]+){1,})[ ]*\}';
	# Expression to use when parsing in a context when no capture is desired
	protected $id_class_attr_nocatch_re = '\{(?:[ ]*[#.:][-_:a-zA-Z0-9]+){1,}[ ]*\}';
	protected $elems_with_exattr_re = 'em|strong|u|mark';


	protected function stripExtraAttributes($text) {
	#
	# Strips extra attributes from text, stores them in hash references.
	#
		$text = preg_replace_callback('{
			(					# wrap whole match in $1
			  ([\*]{1,3}|[\_]{1,3})
			  (?:[ ]? '.$this->id_class_attr_catch_re.' ){1} # $3 = extra attr
			)
			}xs',
			array(&$this, '_stripExtraAttributes_callback'),
			$text);

		$result = $this->hashPart($text, 'B');
		return $text;
	}
	protected function _stripExtraAttributes_callback($matches) {
			$result = ' [!!!]{ ' . $matches[3] . ' }' . $matches[2];
			return $result;
	}


	protected function doExtraAttributes($tag_name, $attr) {
	#
	# Parse attributes caught by the $this->id_class_attr_catch_re expression
	# and return the HTML-formatted list of attributes.
	#
	# Currently supported attributes are .class, #id and :language.
	#
		if (empty($attr)) return "";
		
		# Split on components
		preg_match_all('/[#.:][-_:a-zA-Z0-9]+/', $attr, $matches);
		$elements = $matches[0];

		# handle classes and ids (only first id taken into account)
		$classes = array();
		$id = false;
		$lang = false;
		foreach ($elements as $element) {
			if ($element{0} == '.') {
				$classes[] = substr($element, 1);
			} else if ($element{0} == '#') {
				if ($id === false) $id = substr($element, 1);
			} else if ($element{0} == ':') {
				if ($lang === false) $lang = substr($element, 1);
			}
		}

		# compose attributes as string
		$attr_str = "";
		if (!empty($id)) {
			$attr_str .= ' id="' . $id . '"';
		}
		if (!empty($classes)) {
			$attr_str .= ' class="' . implode(" ", $classes) . '"';
		}
		if (!empty($lang)) {
			$attr_str .= ' lang="' . $lang . '"';
		}
		return $attr_str;
	}



	### Text Range Spans ###

	protected function doSpans($text) {
		$text = preg_replace_callback('{
			(					# wrap whole match in $1
			  \[\[
				([^\[\]]+)		# link text = $2; can\'t contain [ or ]
			  \]\]
			  (?:[ ]? '.$this->id_class_attr_catch_re.' )? # $3 = extra attr
			)
			}xs',
			array(&$this, '_doSpans_callback'), $text);
		return $text;
	}

	protected function _doSpans_callback($matches) {
		$span = $matches[2];
		$attr = $this->doExtraAttributes('span', $dummy =& $matches[3]);

		$result = '<span' . $attr . '>' . $span . '</span>';
		$result  = $this->hashPart($result);
		return $result;
	}


	### Voice Alternative Spans ###

	protected function doVoiceAlter($text) {
		$text = preg_replace_callback('{
			(					# wrap whole match in $1
			  \:\:
				([^\:]+)		# link text = $2; can\'t contain :
			  \:\:
			  (?:[ ]? '.$this->id_class_attr_catch_re.' )? # $3 = extra attr
			)
			}xs',
			array(&$this, '_doVoiceAlter_callback'), $text);
		return $text;
	}

	protected function _doVoiceAlter_callback($matches) {
		$span = $matches[2];
		$attr = $this->doExtraAttributes('i', $dummy =& $matches[3]);

		$result = '<i' . $attr . '>' . $span . '</i>';
		$result  = $this->hashPart($result);
		return $result;
	}



	### Keyword Spans ###

	protected function doKeyword($text) {
		$text = preg_replace_callback('{
			(					# wrap whole match in $1
			  \+\+
				([^\+]+)		# link text = $2; can\'t contain +
			  \+\+
			  (?:[ ]? '.$this->id_class_attr_catch_re.' )? # $3 = extra attr
			)
			}xs',
			array(&$this, '_doKeyword_callback'), $text);
		return $text;
	}

	protected function _doKeyword_callback($matches) {
		$span = $matches[2];
		$attr = $this->doExtraAttributes('b', $dummy =& $matches[3]);

		$result = '<b' . $attr . '>' . $span . '</b>';
		$result  = $this->hashPart($result);
		return $result;
	}



	### Abbreviations ###
	
	protected function stripAbbreviations($text) {
	#
	# Strips abbreviations from text, stores titles in hash references.
	#
		$less_than_tab = $this->tab_width - 1;

		# Form: *[abbr.]: optional title
		#       **[acronym]: optional title
		$text = preg_replace_callback('{
			^[ ]{0,'.$less_than_tab.'}([\*]{1,2})\[(.+?)\][ ]?:	# acronym = $1 ; abbr_id = $2
			([^\{\}\n]+)									  # text = $3 (no blank lines allowed)
			(?:[ ]? '.$this->id_class_attr_catch_re.' )?  # $4 = extra attr	
			}xm',
			array(&$this, '_stripAbbreviations_callback'),
			$text);
		return $text;
	}
	protected function _stripAbbreviations_callback($matches) {
		$acronym = ($matches[1] === "**") ? '.acronym' : '';

		$abbr_word = $matches[2];
		$abbr_desc = $matches[3];
		$abbr_attr = $this->doExtraAttributes('span', $dummy =& $matches[4] . $acronym);

		if ($this->abbr_word_re)
			$this->abbr_word_re .= '|';
		$this->abbr_word_re .= preg_quote($abbr_word);
		$this->abbr_desciptions[$abbr_word] = trim($abbr_desc);
		$this->abbr_attr[$abbr_word] = $abbr_attr;
		return ''; # String that will replace the block
	}
	protected function doAbbreviations($text) {
	#
	# Find defined abbreviations in text and wrap them in <abbr> elements.
	#
		if ($this->abbr_word_re) {
			// cannot use the /x modifier because abbr_word_re may 
			// contain significant spaces:
			$text = preg_replace_callback('{'.
				'\|(?:'.$this->abbr_word_re.')\|'.
				'}', array(&$this, '_doAbbreviations_callback'), $text);
		}
		return $text;
	}
	protected function _doAbbreviations_callback($matches) {
		$abbr = preg_replace('{^\|(.*)\|$}', '$1', $matches[0]);
		if (isset($this->abbr_desciptions[$abbr])) {
			$desc = $this->abbr_desciptions[$abbr];
			$attr = $this->abbr_attr[$abbr];

			if (empty($desc)) {
				return $this->hashPart("<abbr" . $attr . ">$abbr</abbr>");
			} else {
				$desc = $this->encodeAttribute($desc);
				return $this->hashPart("<abbr" . $attr . " title=\"$desc\">$abbr</abbr>");
			}
		} else {
			return $abbr;
		}
	}
}
?>













































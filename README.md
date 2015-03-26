
# Han-Manual
This is the API manual for [Han.css][han-css]. Hosted on <http://css.hanzi.co/>. The manual currently corresponds to Han.css v3.1.1.

Documents of the manual, located in `doc/`, are written in Markdown/[CommonMark][stmd] format.

[han-css]: https://github.com/ethantw/Han
[stmd]: http://commonmark.org

## How to use
### Requirements

- Node.js 0.10.x
    - LiveScript 1.3.1

### Install dependencies
```
sudo npm install
```

### Run
```
npm start
```

### Run the dev locally and watch files
```
npm run dev
```
Open <http://localhost:7788/> or <http://localhost:7788/manual> to see if it runs properly.

### Compile all files
```
gulp www
```

## License
All files and documents of the manual are licensed under [Creative Commons BY-3.0][cc-by].

[cc-by]: https://creativecommons.org/licenses/by/3.0/

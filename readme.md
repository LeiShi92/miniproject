## install typescript

```bash
npm install -g typescript
tsc --v
```

## setup lite-server

```bash
npm init -y
npm install lite-server
```

## Update index.html

<script type="module" src="dist/index.js"></script>

## install typescript declaration file

```bash
npm install --save-dev @types/lodash
```

## setup webpack

```bash
npm install --save-dev webpack webpack-cli typescript ts-loader
npm install --save-dev webpack-dev-server
npm install --save-dev clean-webpack-plugin
```

### Create webpack.dev.js based on following

https://webpack.js.org/guides/typescript/#basic-setup
https://webpack.js.org/guides/typescript/#source-maps

### Create webpack.prod.js for production

### edit package.json

```json
  "scripts": {
    "start" : "lite-server",
    "build": "webpack --config webpack.prod.js",
    "serve": "webpack-dev-server --config webpack.dev.js --open"
  },
```

```bash
tsc -w  //watch for file changes, compile automaticaly
--npm start -- run lit-server
npm run serve -- dev
npm run build -- prod build
```

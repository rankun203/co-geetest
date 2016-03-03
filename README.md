# co-geetest 极验验证 co 兼容库

[![NPM](https://nodei.co/npm/co-geetest.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/co-geetest/)

### Installation

```
npm install --save co-geetest
```

请确保您使用较新版本的 Node.js

### Usage

```
let geetest = require('co-geetest').init(key, id);

// In some router:
let sign = yield geetest.register();
```

- 如果您不知道您的极验 key 与 id, 请转至[极验后台](http://account.geetest.com/manage).

----
谢谢使用

Kun,

Ragards

## MIT License

Copyright (c) 2014 Kun Ran

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[npm]: http://img.shields.io/npm/v/co-geetest.svg?style=flat-square

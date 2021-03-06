<a name="top"></a> node-xport
=============================

[![Build Status][image-npm]][url-npm]
[![Build Status][image-tra]][url-tra]
[![Build Status][image-lic]][url-lic]
[![Build Status][image-dls]][url-dls]

###[Using node-xport v0.2.0 or later](#refv020)
###[Using node-xport v0.1.1 or earlier](#refv011)

<a name="refv020"></a> v0.2.0+ Reference [<sub><sup><strong>Top</strong></sup></sub>][lnk-top]
----------------------------------------
node-xport v0.2.0+ supports two different types of module export, partial exports and full/combined exports.
Full/combined exports are done by exporting some object and then making partial exports afterwards, as you can see [below](#refv020-Combined). If you do a full export after making partial exports, it will wipe out the partial exports.

_Note_: v0.2.x ___is___ backwards compatible with v0.1.1 and earlier.

___DEVELOPERS___: Tests can be run from the command line by executing ```npm test```. No output indicates everything passed <sub><sup>(or node secretly hates you)</sup></sub>.

### <a name="refv020-Examples"></a> Examples
* [Class exports (Full)](#refv020-Class)
* [Function exports (Full)](#refv020-Function)
* [Object exports (Full)](#refv020-Object)
* [Partial exports (Partial)](#refv020-Partial)
* [Combined exports](#refv020-Combined)

#### <a name="refv020-Class"></a> Class export [<sub><sup><strong>Examples</strong></sup></sub>][lnk-examples] [<sub><sup><strong>Top</strong></sup></sub>][lnk-top]
```js
var xport = require('node-xport')(module);

var classExport = (function() {
    function MyClass(name) {
        this.name = (name || "DefaultName");
    }

    MyClass.prototype.hello = function() {
        return ("Hello my name is " + this.name);
    };

    MyClass.sayHello = function(myInstance) {
        return myInstance.hello();
    };

    return MyClass;
})();

xport(classExport);
```

#### <a name="refv020-Function"></a> Function export [<sub><sup><strong>Examples</strong></sup></sub>][lnk-examples] [<sub><sup><strong>Top</strong></sup></sub>][lnk-top]
```js
var xport = require('node-xport')(module);

var functionExport = function(num, str) {
    return "A string: '" + str + "' and a number: '" + num + "'.";
};

xport(functionExport);
```

#### <a name="refv020-Object"></a> Object export [<sub><sup><strong>Examples</strong></sup></sub>][lnk-examples] [<sub><sup><strong>Top</strong></sup></sub>][lnk-top]
```js
var xport = require('node-xport')(module);

var objectExport = {
    'somenumber': 99,
    'somestring': "a string",
    'someobject': {
        'myname': "An Object"
    }
};

xport(objectExport);
```

#### <a name="refv020-Partial"></a> Partial export [<sub><sup><strong>Examples</strong></sup></sub>][lnk-examples] [<sub><sup><strong>Top</strong></sup></sub>][lnk-top]
```js
var xport = require('node-xport')(module);

var whatAmI = function() {
    return "I am another partial export";
};

xport('myClass', classExport);
xport('myFunction', functionExport);
xport('myObject', objectExport);
xport('whatAmI', whatAmI);
```

#### <a name="refv020-Combined"></a> Combined export [<sub><sup><strong>Examples</strong></sup></sub>][lnk-examples] [<sub><sup><strong>Top</strong></sup></sub>][lnk-top]
```js
var xport = require('node-xport')(module);

var combined = (function() {
    function Combined() {}

    Combined.saySomething = function() {
        return "Something? :D"
    };

    return Combined;
})();

xport(combined);

var whatAmI = function() {
    return "I am another partial export";
};

xport('myClass', classExport);
xport('myFunction', functionExport);
xport('myObject', objectExport);
xport('whatAmI', whatAmI);
```

<a name="refv011"></a> Example for v0.1.1 and earlier [<sub><sup><strong>Top</strong></sup></sub>][lnk-top]
-----------------------------------------------------
```js
var xport = require('node-xport');

var myExports = {};

xport(module, myExports);

```

[image-npm]: https://img.shields.io/npm/v/node-xport.svg?style=flat
[image-tra]: http://img.shields.io/travis/PandaCoder/node-xport.svg?style=flat
[image-lic]: http://img.shields.io/npm/l/node-xport.svg?style=flat
[image-dls]: https://img.shields.io/npm/dm/node-xport.svg?style=flat

[url-npm]: https://npmjs.org/package/node-xport
[url-tra]: https://travis-ci.org/PandaCoder/node-xport
[url-lic]: https://github.com/PandaCoder/node-xport/blob/master/LICENSE
[url-dls]: https://npmjs.org/package/node-xport

[lnk-examples]: #refv020-Examples "Go to v0.2.0+ Examples"
[lnk-top]: #top "Go to Top"

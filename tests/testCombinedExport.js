/*
    node-xport, a module export (simplifier?) utility package for node.js
    Copyright (C) 2014  Robert Lodico (lodico.rj@gmail.com)

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

var xport = require('../xport')(module)
  , assert = require('assert')
  , combinedExport = require('./exampleCombinedExport')
  ;

function Tester() {}

Tester.runTests = function() {
    assert.notEqual(combinedExport, undefined);
    assert.notEqual(combinedExport, null);

    assert.notEqual(combinedExport.myClass, undefined);
    assert.notEqual(combinedExport.myClass, null);

    assert.notEqual(combinedExport.myFunction, undefined);
    assert.notEqual(combinedExport.myFunction, null);

    assert.notEqual(combinedExport.myObject, undefined);
    assert.notEqual(combinedExport.myObject, null);

    assert.notEqual(combinedExport.whatAmI, undefined);
    assert.notEqual(combinedExport.whatAmI, null);

    assert.notEqual(combinedExport.saySomething, undefined);
    assert.notEqual(combinedExport.saySomething, null);

    assert.equal(combinedExport.saySomething(), "Something? :D");
};

xport(Tester);
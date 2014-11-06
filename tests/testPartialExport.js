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
  , partialExport = require('./examplePartialExport')
  ;

function Tester() {}

Tester.runTests = function() {
    assert.notEqual(partialExport, undefined);
    assert.notEqual(partialExport, null);

    assert.notEqual(partialExport.myClass, undefined);
    assert.notEqual(partialExport.myClass, null);

    assert.notEqual(partialExport.myFunction, undefined);
    assert.notEqual(partialExport.myFunction, null);

    assert.notEqual(partialExport.myObject, undefined);
    assert.notEqual(partialExport.myObject, null);

    assert.notEqual(partialExport.whatAmI, undefined);
    assert.notEqual(partialExport.whatAmI, null);
};

xport(Tester);
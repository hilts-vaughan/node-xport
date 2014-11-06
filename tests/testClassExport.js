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
  , classExport = require('./exampleClassExport')
  ;

function Tester() {}

Tester.runTests = function() {
    assert.notEqual(classExport, undefined);
    assert.notEqual(classExport, null);
    
    var instanceDefault = new classExport();
    var instanceNamed = new classExport("Roboto");

    assert.equal(instanceDefault.name, "DefaultName");
    assert.equal(instanceNamed.name, "Roboto");
    assert.equal(instanceDefault.hello(), "Hello my name is DefaultName");
    assert.equal(classExport.sayHello(instanceNamed), "Hello my name is Roboto");
};

xport(Tester);
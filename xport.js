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

var xport = function(module, exports) {
    if (!module) {
        return function() {};
    }

    /* Maintain backwards compatibility with node-xport v0.1.1- */
    if (exports) {
        if (typeof module !== 'undefined' && module.exports) {
            module.exports = exports;
        }
    }

    return function(exportName, exportValue) {
        if (!module) {
            return undefined;
        }

        module.exports = (module.exports || {});
        if (!exportValue || typeof exportName !== 'string') {
            return module.exports = (exportValue || exportName);
        }

        return module.exports[exportName] = exportValue;
    };
};

/* Export the module */
xport(module)(xport);
'use strict';

/*
 * Unit tests for lib/calculator.js
 */

describe('Calculator', function () {

    // API for interacting with the page.
    var controls = {
        get result() {
            return document.getElementById('result').innerHTML;
        },
        get x() {
            return document.getElementById('x').value;
        },
        set x(val) {
            document.getElementById('x').value = val;
        },
        get y() {
            return document.getElementById('y').value;
        },
        set y(val) {
            document.getElementById('y').value = val;
        },
        clickAdd: function () {
            document.getElementById('add').click();
        },
        clickSubtract: function () {
            document.getElementById('subtract').click();
        },
        clickMultiply: function () {
            document.getElementById('multiply').click();
        }
    };

    // inject the HTML fixture for the tests
    beforeEach(function () {
        // Why this line? See: https://github.com/billtrik/karma-fixture/issues/3
        fixture.base = 'test';
        fixture.load('calculator.fixture.html');

        // init js lib
        window.calculator.init();
    });

    // remove the html fixture from the DOM
    afterEach(function () {
        fixture.cleanup();
    });

    it('should calculate 3 for 1 + 2', function () {
        controls.x = 1;
        controls.y = 2;
        controls.clickAdd();
        controls.result.should.equal('3');
    });

    it('should calculate 1 for 4 - 3', function () {
        controls.x = 4;
        controls.y = 3;
        controls.clickSubtract();
        controls.result.should.equal('1');
    });

    it('should calculate 10 for 2 * 5', function () {
        controls.x = 2;
        controls.y = 5;
        controls.clickSubtract();
        controls.result.should.equal('10');
    });

    it('should calculate zero for invalid x value', function () {
        controls.x = 'hello';
        controls.y = 2;
        controls.clickAdd();
        controls.result.should.equal('0');
    });

    it('should calculate zero for invalid y value', function () {
        controls.x = 1;
        controls.y = 'goodbye';
        controls.clickAdd();
        controls.result.should.equal('0');
    });

});
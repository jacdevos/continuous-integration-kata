'use strict';

window.calculator = (function() {

    return {
        init: init
    }

	function getIntById(id) {
		return parseInt(document.getElementById(id).value, 10);
	};

	function calculateSum() {
		var sum = getIntById('x') + getIntById('y');
		document.getElementById('result').innerHTML = isNaN(sum) ? 0 : sum;
	};

    function calculateSubtract() {
        var sum = getIntById('x') - getIntById('y');
        document.getElementById('result').innerHTML = isNaN(sum) ? 0 : sum;
    };

    function multiply() {
        var multiplyResult = getIntById('x') * getIntById('y');
        document.getElementById('result').innerHTML = isNaN(multiplyResult) ? 0 : multiplyResult;
    }

	function init() {
		document.getElementById('add').addEventListener('click', calculateSum);
        document.getElementById('multiply').addEventListener('click', multiply);
        //document.getElementById('subtract').addEventListener('click', calculateSubtract);
	};

})();

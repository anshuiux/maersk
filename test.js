
(() => {
	'use strict';

	/*
		* Test method to display right or wrong assertion
		* @param {string} desc
		* @param {function} fn
	*/
	function it(desc, func) {
		try {
		  	func();
		  	console.log('\x1b[32m%s\x1b[0m', '\u2714 ' + desc);
		} catch (error) {
		  	//	console.log('\n');
		  	console.log('\x1b[31m%s\x1b[0m', '\u2718 ' + desc);
		  	//	console.error(error);
		}
	}


	//	Main assertion method
	function assert(isTrue) {
		if (!isTrue) {
			throw new Error();
		}
	}


	//	Custom function to test shuffled values
	const isSorted = (sortedArr) => sortedArr.every((item, index, arr) => !index || arr[index - 1] <= item);

	//	Mock data
	const unSortedArray = [1, 2, 4, 3, 9, 8, 5];
	const sortedArray = [3, 5, 9, 11, 15, 19, 100];

	//	Test Validation
	it('should validate the sorting - passed sorted array', function () {
		assert(isSorted(sortedArray));
	});

	it('should validate the sorting - passed unsorted array', function () {
		assert(isSorted(unSortedArray));
	});
})();
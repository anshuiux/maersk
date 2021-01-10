/*
	* Project Name: Maersk Coding Assignment
	* Module/File: Main Script
	* Author: Anshuman Mishra
	* Last Updated on: 10th Jan, 2021;
*/

'use strict';

//	Declaring ES6 class
class ShuffleSortDetails {
	constructor() {
		this.list = Array.from(Array(9).keys());
	}

	//	Load the default set of numbers
	loadSet() {
		const listContainer = document.querySelector('ul');
		listContainer.innerHTML = '';

		this.list.map((item) => listContainer.innerHTML += `<li class="maersk-box${item + 1}">${item + 1}</li>`);
		
	}


	/*
		* Algorithm Name: Modern alogirthm by Richard Durstenfeld
		* Method Desc: Shuffle the set of numbers
		* Time complexity: O(N)
	*/
	shuffleSet() {
		for (let i = this.list.length - 1; i > 0; i--) {
	        const j = Math.floor(Math.random() * (i + 1));
	        [this.list[i], this.list[j]] = [this.list[j], this.list[i]];
	    }

	    this.loadSet();
	}


	/*
		* Algorithm Name: Fisher–Yates original algorithm
		* Method Desc: Shuffle the set of numbers
		* Time complexity: O(n2)
		* Implementation:
		
		shuffleSet() {
			let activeIndex = this.list.length;
			let shuffledIndex = '';

			while (0 !== activeIndex) {
				shuffledIndex = Math.floor(Math.random() * activeIndex);
				activeIndex--;

				[this.list[activeIndex], this.list[shuffledIndex]] = [this.list[shuffledIndex], this.list[activeIndex]];
			}

			this.loadSet();
		}
	*/


	//	Sort the set of numbers
	sortSet() {
		let sortFlag = false;
		while (!sortFlag) {
			sortFlag = true;

			for (let i = 1; i < this.list.length; i++) {
				if (this.list[i - 1] > this.list[i]) {
					sortFlag = false;
					[this.list[i - 1], this.list[i]] = [this.list[i], this.list[i - 1]];
				}
			}
		}

		this.loadSet();
	}	


	/*
		Sort the set of numbers using in-built sort method

		sortSet() {
			this.list.sort((a, b) => a - b);
			this.loadSet();
		}
	*/
}

const shuffleSort = new ShuffleSortDetails();

(() => {
	shuffleSort.loadSet();
})();

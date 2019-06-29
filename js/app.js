"use strict";

window.onload = function(event) {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function chunk(array, number) {
		let copy = array.split(" ").slice();
		let integer = Number(number);
		console.log(integer);
		if (array === "" || number === "") {
			return display("???", "???");
		} else if (isNaN(number) || number.indexOf("e") > -1) {
			return display("Second input must only contain numbers", "???");
		} else if (number < chunked.length) {
			return display("Second input must be not be less than the number of items in the first input", "???");
		} else if (/\s\s/.test(array)) {
			return display("First input must not contain two adjacent white spaces", "???");
		} else {
			let chunked = [];
			let i = 0;
			let n = integer;

			while (i < copy.length) {
				chunked.push(copy.slice(i, n));

				i = i + integer;
				n = n + integer;
			}

			console.log(copy, chunked);
			return display(copy, chunked);
		}
	}

	function display(original, chunked) {
		document.getElementById("original-value").textContent = "[" + original + "]";
		document.getElementById("chunked-value").textContent = "[" + chunked + "]";
	}

	function toggle(chevron) {
		let task = document.getElementById("task");

		if (Array.from(chevron.classList).indexOf("fa-chevron-up") === -1) {
			chevron.classList.remove("fa-chevron-down");
			chevron.classList.add("fa-chevron-up");

			task.classList.remove("hidden");
			task.classList.add("visible");
		} else {
			chevron.classList.remove("fa-chevron-up");
			chevron.classList.add("fa-chevron-down");

			task.classList.remove("visible");
			task.classList.add("hidden");
		}
	}

	let chevron = document.getElementsByClassName("fas")[0];
	chevron.addEventListener("click", function(event) {
		toggle(this);
	});

	chevron.addEventListener("keydown", function(event) {
		if (event.keyCode === 13 || event.keyCode === 32) {
			toggle(this);
		}
	});

	let form = document.getElementById("form");
	form.addEventListener("submit", function(event) {
		event.preventDefault();

		chunk(this.children[0].value, this.children[1].value);
	});
};
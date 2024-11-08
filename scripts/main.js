/**
 * main.js
 * The init script for this HTML5 Video Application
 * This app is used as a demo for creating a video application utilizing the video API
 * built into HTML5. It is inspired by Bruce Lawson's example hack for creating video captions.
 * I added the ability to associate custom callbacks with moments in time of the video.
 *
 * @ format
 * @NOTE: Mozilla released Popcorn and Butter for doing the same thing right after I got this working.
 * @UPDATE: Popcorn and Butter are dead. This is now useful again. I've updated it to be vanilla JS with no dependencies. by Troy Bennett 7-2010 (updated 12-2021)
 */

import { cueTimer } from "./modules/cuepoints.js";

document.addEventListener("DOMContentLoaded", init);
var myCues;
function init() {
	// create a playlist of functions to call at certain moments in the video.
	myCues = [
		{ seconds: 2, callback: func1 },
		{ seconds: 9, callback: func1 },
		{ seconds: 15, callback: func1 },
		{ seconds: 25, callback: func1 },
		{ seconds: 37, callback: func1 },
		{ seconds: 50, callback: func1 },
	];
}

// setup the cuepoint timer
cueTimer.setup("vid", myCues);

// create shortcut variables
const vid = document.querySelector("#vid");

document.addEventListener("DOMContentLoaded", (e) => {
	var myCues = [
		{ seconds: 2, callback: shakeScreen },
		{ seconds: 25, callback: shakeScreen },
		{ seconds: 83, callback: shakeScreen },
		{ seconds: 108, callback: shakeScreen },
		{ seconds: 50, callback: shakeScreen },
	];

	cueTimer.setup("vid", myCues);
});

//the custom callback functions to trigger when a cuepoint is hit.
//You can code up whatever behavior you need in your own callbacks

function func1() {
	console.log("ELlo Losers");
}

function shakeScreen(duration, intensity) {
	duration = 1000;
	intensity = 8;
	let startTime = Date.now();
	let shakeInterval = setInterval(() => {
		if (Date.now() - startTime > duration) {
			clearInterval(shakeInterval);
			document.body.style.transform = "translate(0px, 0px)"; // Reset position
			return;
		}

		let x = Math.random() * intensity * 2 - intensity;
		let y = Math.random() * intensity * 2 - intensity;

		document.body.style.transform = `translate(${x}px, ${y}px)`;
	}, 10);
}

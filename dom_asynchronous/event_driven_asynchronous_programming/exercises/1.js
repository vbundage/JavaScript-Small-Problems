"use strict";

function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(...callbacks) {
  const seconds = callbacks.length * 2;
  let currentTime = 1;

  const id = setInterval(() => {
    console.log(currentTime);
    if (currentTime === seconds) clearInterval(id);
    currentTime += 1;
  }, 1000);

  callbacks.forEach(callback => {
    const randomSeconds = Math.floor(Math.random() * seconds * 1000);
    setTimeout(callback, randomSeconds);
  });
}

randomizer(callback1, callback2, callback3);

// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6
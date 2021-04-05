/* eslint-disable max-lines-per-function */
"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const MAX_HOURS = 99;
  const MAX_MINUTES = 60;
  const MAX_SECONDS = 60;
  const MAX_CENTISECONDS = 100;
  const DEFAULT = '00';

  class Timer {
    constructor() {
      this.reset();
    }

    getElapsedTime() {
      return Date.now() - this.startTime;
    }

    startTimer() {
      this.startTime = Date.now();
    }

    stopTimer() {
      this.storeInterval += this.getElapsedTime();
    }

    reset() {
      this.startTime = 0;
      this.storeInterval = 0;
    }

    getMillisecondsElapsed() {
      return this.storeInterval + this.getElapsedTime();
    }
  }

  const stopwatch = {
    updateTimer() {
      let centiseconds = Math.floor(this.timer.getMillisecondsElapsed() / 10);
      let seconds = Math.floor(centiseconds * 0.01);
      let minutes = Math.floor(seconds / MAX_SECONDS);
      let hours = Math.floor(minutes / MAX_MINUTES);

      this.centiseconds.textContent = (centiseconds % MAX_CENTISECONDS).toString().padStart(2, '0');
      this.seconds.textContent = (seconds % MAX_SECONDS).toString().padStart(2, '0');
      this.minutes.textContent = (minutes % MAX_MINUTES).toString().padStart(2, '0');
      this.hours.textContent = (hours % MAX_HOURS).toString().padStart(2, '0');
    },

    resetTimer() {
      this.stopTimer();
      this.timer.reset();
      this.hours.textContent = DEFAULT;
      this.minutes.textContent = DEFAULT;
      this.seconds.textContent = DEFAULT;
      this.centiseconds.textContent = DEFAULT;
    },

    stopTimer() {
      clearInterval(this.timerId);
      this.timer.stopTimer();
      this.start.textContent = 'Start';
      this.start.classList.add('stop');
    },

    startTimer() {
      if (this.start.classList.contains('stop')) {
        this.start.textContent = 'Stop';
        this.start.classList.remove('stop');
        this.timer.startTimer();
        this.timerId = setInterval(this.updateTimer.bind(this), 10);
      } else {
        this.stopTimer();
      }
    },

    bindEvents() {
      this.start.addEventListener('click', this.startTimer.bind(this));
      this.reset.addEventListener('click', this.resetTimer.bind(this));
    },

    init() {
      this.timer = new Timer();
      this.hours = document.getElementById('hours');
      this.minutes = document.getElementById('minutes');
      this.seconds = document.getElementById('seconds');
      this.centiseconds = document.getElementById('centiseconds');
      this.start = document.getElementById('start-btn');
      this.reset = document.getElementById('reset-btn');
      this.bindEvents();
    }
  };

  stopwatch.init();
});
class CircularQueue {
  constructor(bufferSize) {
    this.bufferSize = bufferSize;
    this.buffer = [];
  }

  enqueue(obj) {
    if (this.buffer.length === this.bufferSize) {
      this.dequeue(this.buffer);
    }
    this.buffer.push(obj);
  }

  dequeue() {
    if (this.buffer[0] === undefined) {
      return null;
    }
    return this.buffer.shift();
  }
}

// class CircularQueue {
//   constructor(bufferSize) {
//     this.bufferSize = bufferSize;
//     this.buffer = Array(this.bufferSize).fill(null);
//     this.startPosition = 0;
//     this.endPosition = 0;
//   }

//   enqueue(obj) {
//     if (this.buffer[this.startPosition] !== null) {
//       this.dequeue();
//     }
//     this.buffer[this.startPosition] = obj;
//     this.startPosition = this.increment(this.startPosition);
//   }

//   dequeue() {
//     let value = this.buffer[this.endPosition];
//     this.buffer[this.endPosition] = null;
//     if (value !== null) {
//       this.endPosition = this.increment(this.endPosition);
//     }
//     return value;
//   }

//   increment(position) {
//     return (position + 1) % this.bufferSize;
//   }
// }

let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1);
anotherQueue.enqueue(2);
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3);
anotherQueue.enqueue(4);
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5);
anotherQueue.enqueue(6);
anotherQueue.enqueue(7);
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);
// class Queue {
//   constructor() {
//     this.queue = [];
//   }

//   enqueue(item) {
//     this.queue.push(item);
//   }
//   dequeue() {
//     return this.queue.shift();
//   }
//   isEmpty() {
//     return this.queue.length === 0;
//   }
//   size() {
//     return this.queue.length;
//   }
//   peek() {
//     return this.queue[0];
//   }
//   display() {
//     console.log(this.queue);
//   }
// }

// const queue = new Queue();
// console.log(queue.isEmpty());
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.display();
// queue.dequeue();
// queue.display();

class CirQue {
  constructor(size) {
    this.size = size;
    this.items = new Array(size);
    this.currLength = 0;
    this.front = -1;
    this.rear = -1;
  }
  isFull() {
    return this.currLength === this.size;
  }
  isEmpty() {
    return this.currLength === 0;
  }

  enqueue(){
    
  }
  

}

const cirQue = new CirQue(5);
console.log(cirQue);

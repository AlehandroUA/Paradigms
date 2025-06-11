'use strict';

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  move(x, y) {
    this.x += x;
    this.y += y;
  }
  
  clone() {
    return new Point(this.x, this.y);
  }
  
  toString() {
    return `(${this.x}, ${this.y})`;
  }
}

console.log('\nRC1');

const sharedPoint = new Point(0, 0);
console.log('Start position:', sharedPoint.toString());

function simulateRaceCondition() {
  const process1 = () => {
    const currentX = sharedPoint.x; 
    const currentY = sharedPoint.y; 

    setTimeout(() => {
      sharedPoint.x = currentX + 10;
      sharedPoint.y = currentY + 10;
      console.log('Proccess 1 end:', sharedPoint.toString());
    }, 1);
  };

  const process2 = () => {
    const currentX = sharedPoint.x; 
    const currentY = sharedPoint.y; 
    
    setTimeout(() => {
      sharedPoint.x = currentX + 5;
      sharedPoint.y = currentY + 5;
      console.log('Proccess 2 end:', sharedPoint.toString());
    }, 1);
  };
  
  process1();
  process2();
  
  setTimeout(() => {
    console.log('Final result:', sharedPoint.toString());
  }, 50);
}

simulateRaceCondition();

setTimeout(() => {
  console.log('\nRC2');
  
  const point = new Point(0, 0);
  console.log('Start position:', point.toString());
  
  const promises = [];
  
  for (let i = 0; i < 5; i++) {
    promises.push(new Promise(resolve => {
      setTimeout(() => {
        point.move(1, 1);
        console.log(`Operation ${i + 1}:`, point.toString());
        resolve();
      }, Math.random() * 20);
    }));
  }
  
  Promise.all(promises).then(() => {
    console.log('Final:', point.toString());
  });
}, 50);

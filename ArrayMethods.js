//1. find()
// const numbers = [5, 12, 8, 130, 44];
// const found = numbers.find(element => element > 10);
// console.log(found);

//2. findIndex()
// const numbers = [5, 12, 8, 130, 44];
// const index = numbers.findIndex(element => element > 10);
// console.log(index); 

//3. some()
// const numbers = [1, 2, 3, 4, 5];
// const hasEven = numbers.some(num => num % 2 === 0);
// console.log(hasEven); // true

//4. every()
// const numbers = [2, 4, 6, 8];
// const allEven = numbers.every(num => num % 2 === 0);
// console.log(allEven); // true

//5. concat()
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const merged = array1.concat(array2);

// console.log(merged); // [1, 2, 3, 4, 5, 6]


//6. slice()

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2)); // ['camel', 'duck', 'elephant']
// console.log(animals.slice(2, 4)); // ['camel', 'duck']


//7. splice()

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb'); // تضيف 'Feb' في الفهرس 1
// console.log(months); // ['Jan', 'Feb', 'March', 'April', 'June']

// months.splice(4, 1, 'May'); // تستبدل 'June' بـ 'May'
// console.log(months); // ['Jan', 'Feb', 'March', 'April', 'May']

//8. reduce()
// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); // 10


//9. flat()
// const arr = [1, 2, [3, 4], [5, [6, 7]]];
// console.log(arr.flat()); // [1, 2, 3, 4, 5, [6, 7]]
// console.log(arr.flat(2)); // [1, 2, 3, 4, 5, 6, 7]

//10. flatMap()
// const arr = [1, 2, 3, 4];
// const result = arr.flatMap(x => [x * 2]);
// console.log(result); // [2, 4, 6, 8]


//11. fill()
// const array = [1, 2, 3, 4];
// array.fill(0, 1, 3);
// console.log(array); // [1, 0, 0, 4]


//12. includes()
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.includes(2)); // true
// console.log(numbers.includes(9)); // false


//13. sort()
// const numbers = [4, 2, 5, 1, 3];
// numbers.sort((a, b) => a - b); // ترتيب تصاعدي
// console.log(numbers); // [1, 2, 3, 4, 5]


//14. reverse()
// const numbers = [1, 2, 3];
// numbers.reverse();
// console.log(numbers); // [3, 2, 1]

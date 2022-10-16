// console.log(2 === '2');
//
// const x = 10;
// let isOdd = '';
//
// if (x % 2 === 0) {
//     isOdd = false
// } else {
//     isOdd = true
// }
//
const spainCapital = 'madrid';
let isCorrectAnswer;

// Конструкция if..else
// if (spainCapital === 'Madrid') {
//     isCorrectAnswer = true;
// } else if (spainCapital === 'madrid') {
//     isCorrectAnswer = true;
// } else if (spainCapital === 'MADRID') {
//     isCorrectAnswer = true;
// } else {
//     isCorrectAnswer = false;
// }

switch(spainCapital){
    case 'Madrid':
        isCorrectAnswer = true;
        break;
    case 'madrid':
        isCorrectAnswer = true;
        break;
    case 'MADRID':
        isCorrectAnswer = true;
        break;
    default:
        isCorrectAnswer = false;
}
console.log(isCorrectAnswer)


// Тернарный оператор

const a = 1;
const b = 2;
let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// Добавьте код здесь, переписав конструкцию выше на тернарный оператор

result=(a + b < 4) ? 'Мало': 'Много';
console.log(result)
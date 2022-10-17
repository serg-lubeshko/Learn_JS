// Дан массив чисел. В цикле while обойдите массив и значения всех элементов с нечетным индексом умножьте на 2.
//
// Значения элементов с четным индексом должны остаться без изменения.

const numbers = [2, 7, 19, 22, 38, 9];

let index = 0
while (index <= numbers.length-1) {
    if (index % 2 !== 0) {
        numbers[index] *= 2
    } else {
        numbers[index] = numbers[index]
    }
    index++
}
console.log(numbers)
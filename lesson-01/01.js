// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum

// your code
let sum = 0;
let i = 1;
const limit = 20;

while (i <= limit) {
    sum = sum + i;
    i++;
}
console.log(sum);
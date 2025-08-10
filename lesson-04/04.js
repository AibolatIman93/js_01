/*
Напишите функцию `doubleEachCharacter`, 
которая принимает строку и возвращает новую строку, 
где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function doubleEachCharacter(str) {
  let array = str.split("");
  let newArr = [];
  for(let i = 0; i<array.length; i++){
    newArr.push(array[i]);
    newArr.push(array[i]);
  }
  return newArr.join("");
}


console.log(doubleEachCharacter('hello'));

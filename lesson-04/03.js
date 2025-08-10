/*
Напишите функцию `findCommonElements`, 
которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее.
 Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function findCommonElements(array1, array2) {
  let common_array = [];
  //if(array1.length >= array2.length){
    for(let i = 0; i<array1.length; i++){
      let current = array1[i];
      for(let j = 0; j<array2.length; j++){
        if(current === array2[j]){
          common_array.push(current);
          break;
        }
      }
    }
  //}
  //else{
    
  //}
  return common_array;
}

console.log(findCommonElements([1, 2, 3,5], [2, 3, 4,5,6]));

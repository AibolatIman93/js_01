/*
Напишите функцию `findUniqueElements`, 
которая принимает массив и возвращает новый массив, 
содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. 
Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function findUniqueElements(array) {
  let uniqueNumbers = [];
  
  for(let i = 0; i<array.length; i++){
    
    let current = array[i];
    let isUnique = true;
    
    for(let j = 0; j<uniqueNumbers.length; j++){
      if(uniqueNumbers[j] === current){
        isUnique = false;
        break;
      }
    }
    
     if(isUnique){
      uniqueNumbers.push(current);
    }
    
  }
  
  return uniqueNumbers;
 }


console.log(findUniqueElements([1, 2, 3, 2, 1, 4]));





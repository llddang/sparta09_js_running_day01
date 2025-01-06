// 1. 정의만 하고 할당을 하지 않았기 때문에 undefined가 출력됩니다.
let uninitialized;
console.log(uninitialized); // undefined

// 2. 재할당할 때 에러가 나는 것은 const입니다.
const apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable

// 3. 배열은 0부터 시작하니 3은 4번째 요소인 19가 출력됩니다.
let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 19


// 4. 문자열 빈칸은 falsy 입니다. 따라서 || 을 하여도 뒤에 false이므로 false이고, 2중 부정하여 불리언으로 만들어도 false입니다.
let mySchedule = "";
console.log(mySchedule || false); // false
console.log(!!mySchedule); // false
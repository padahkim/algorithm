/*oppositeSideArray.sort(() => Math.random() - 0.5) has some issues as below


function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

// 1, 2, 3으로 만들 수 있는 모든 순열의 빈도를 세줍니다.
let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

// 만들 수 있는 모든 순열의 생성 빈도를 세서 출력해줍니다.
for (let key in count) {
  alert(`${key}: ${count[key]}`);
}

**********result******** do not have equality
123: 250706
132: 124425
213: 249618
231: 124880
312: 125148
321: 125223
*/

//algorithm that i make below
const array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

let lastIndex = array.length - 1;
while (lastIndex > -1) {
  const randomIndex = Math.floor(Math.random() * lastIndex + 1);
  let temp = array[randomIndex];
  array[randomIndex] = array[lastIndex];
  array[lastIndex] = temp;
  lastIndex--;
}


//make it to reusable
Array.prototype.shuffle = function () {
  let lastIndex = this.length - 1;
  while (lastIndex > -1) {
    const randomIndex = Math.floor(Math.random() * lastIndex + 1);
    let temp = this[randomIndex];
    this[randomIndex] = this[lastIndex];
    this[lastIndex] = temp;
    lastIndex--;
  }
  return this;
}


const array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let result = array.shuffle();



//check the result
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// 1, 2, 3으로 만들 수 있는 모든 순열의 빈도를 세줍니다.
let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

// 만들 수 있는 모든 순열의 생성 빈도를 세서 출력해줍니다.
for (let key in count) {
  alert(`${key}: ${count[key]}`);
}
/*******result*********
123: 166693
132: 166647
213: 166628
231: 167517
312: 166199
321: 166316
*/
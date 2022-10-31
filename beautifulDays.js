function beautifulDays(i, j, k) {
    // Write your code here
    let days = 0;
    for (i; i <= j; i++) {
        let numSplitToStr = i.toString().split(''); // ["2", "0"]
        console.log(numSplitToStr);
        let strInReverse = numSplitToStr.reverse(); // ["0", '2]
        console.log(strInReverse);
        let reversedNum = parseInt(strInReverse.join(''));//["02"] --. [02]
        console.log(reversedNum);
        if (Math.abs(i - reversedNum) % k === 0) { //20-02 --> 18%6
            days++;
        }
    }
    return days
}

let i = 20;
let j = 23;
let k = 6;
console.log(beautifulDays(i, j, k));
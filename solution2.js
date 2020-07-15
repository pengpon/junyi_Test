// 題目2 (沒寫完)
// 概念: for-loop作法
// check每一個數字
// (除以3!=0 && 除以5!=0) || 除以15=0 >>> 數字留下
// 反之 踢掉

var number = 15;
var j = [];

function test(number) {

    for (let i = 1; i <= number; i++) {
        // console.log(i);
        let leavethree = i % 3;
        let leavefive = i % 5;
        let stayfiftheen = i % 15;
        console.log(leavethree, leavefive, stayfiftheen);
        if (leavethree === 0 || leavefive === 0) {

        }
        if (stayfiftheen === 0 || leavethree != 0 || leavefive != 0) {
            j.push(i);
            //  console.log(i);
        }

    }


}
test(15);
console.log(j);
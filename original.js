// 題目1.a
var a = "abcde";
var b = [];

function one(input) {
    b = [];
    for (let i = 0; i < input.length; i++) {
        //  console.log(a[i]);
        b.unshift(input[i]);
    }
    return (b.join(''));
}

/* console.log('b',b) */
/* console.log(b.join('')) */



// 題目1.2
var word = "flipped class room is important";
var reverse = [];
//console.log(word.split(' '));
array = word.split(' ');
for (let i = 0; i < array.length; i++) {

    // console.log(array[i]);
    reverse.push(one(array[i]))
}

//console.log('result', reverse.join(' '));




// 題目2
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

// 題目3
// key 三個袋子標示都是錯的
// 標示混合>>> 實際為鉛筆/原子筆
// 選擇混合袋>>
// 1.拿出的是鉛筆 表示這袋是鉛筆袋
// 剩下標示鉛筆袋和原子筆袋, 原子筆袋實際為混合袋 鉛筆袋為原子筆袋 
// 2.若拿出的是原子筆 表示這袋是原子筆袋
// 剩下標示鉛筆袋和原子筆袋, 原子筆袋實際為鉛筆袋 鉛筆袋為混合袋



// 題目4
// 300 300 300 原價= 900
// 250 250 250 折扣= 750
// 50  50  50 誠實退=150

// 30  30  30 不老實退=90
// 20  20  20 店員賺= 60 
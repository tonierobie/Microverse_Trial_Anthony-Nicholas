function extraLongFactorials(n) {
    // Write your code here
    let  fact = BigInt(1);
    console.log(fact);
    for(let num=2n; num<=n; num++){
        // Write your
        //console.log(num);
        fact = fact * num
    }
    return fact.toString();
}

let n = 25;
console.log(extraLongFactorials(n));
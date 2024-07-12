function main(arr){
    let a = [];
    arr.forEach(item => item % 2 != 0 ? a.push(item) : null)
    return a;
}
console.log(main([1,2,3,4,5,6]))

function main(arr){
    let n = [];
    let count = {};
    for(let i = 0; i < arr.length; i++){
        if(!count[arr[i]]){
            n.push(arr[i]);
            count[arr[i]] = true;
        }
    }
    return n;
}
console.log(main([1,1,2,2,3,5,6,8,1,1]))
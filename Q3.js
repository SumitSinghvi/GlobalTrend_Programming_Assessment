function main(arr){
    let flatArray = [];
    arr.forEach(item => {
        if(Array.isArray(item)){
            flatArray.push(...main(item));
        }
        else{
            flatArray.push(item);
        }
    });
    return flatArray;
}

console.log(main([1,5,[5,6,[2,5,6],5],4]))
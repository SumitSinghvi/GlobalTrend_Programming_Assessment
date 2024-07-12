function main(n){
    if(n == 0){
        return [];
    }
    else if(n == 1){
        return [0];
    }
    let fibonacci = [0,1];
    for(let i = 2; i < n; i++){
        fibonacci.push(fibonacci[i-2] + fibonacci[i-1]);
    }
    return fibonacci;
}
console.log(main(10))
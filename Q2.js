function main(input){
    input = input.split(' ');
    let result = parseInt(input[0]);
    for(let i = 1; i < input.length - 1; i++){
        if(input[i] == '+'){
            result += parseInt(input[i+1]);
        }
        else if(input[i] == '-'){
            result -= parseInt(input[i+1]);
        }
    }
    return result
}
console.log(main('10 + 20 - 5 + 3'));
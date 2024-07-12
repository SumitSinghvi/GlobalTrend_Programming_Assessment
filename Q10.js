function main(str){
    str = str.split(' ');
    str = str.map(item => {
        return item[0].toUpperCase() + item.slice(1);
    });
    return str;
}
console.log(main('how are you doing today'));
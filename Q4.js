function main(str1, str2){
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');
    return str1 == str2;
}
console.log(main('abcd','bcad') ? 'they are anagrams' : 'they are not anagrams');
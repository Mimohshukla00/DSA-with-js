const str="Mimohshukla"
const str2="whomimohshukla"
const str3="   whoisitmimohshukla   "
 console.log(str.charAt(1));
 console.log(str.charCodeAt(3));
 console.log(str.codePointAt(3))
 console.log(str.concat( str2))
 console.log(`${str}${str2}`)
 console.log(str+str2);
 console.log(str.endsWith("a"));
 console.log(str.includes("M",0));
 console.log(str.indexOf("m"));
console.log(str.lastIndexOf());
console.log(str.length);
console.log(str.localeCompare(str2));/*str1 comes before str2 in alphabetical order, so localeCompare returns -1.
If str1 came after str2, it would return 1.
If the strings were the same, it would return 0.*/
// console.log(str.match());
// console.log(str.matchAll());
// console.log(str.normalize());
console.log(str.padEnd());
// console.log(str.padEnd.toString())
console.log(str.repeat(3));
console.log(str.replace("M","w"));
console.log(str.search("m"));
console.log(str.slice(1,4));
console.log(str.split("m"));
console.log(str.startsWith("M",0));
console.log(str.substring(0,5));
console.log(str.toLocaleLowerCase());
console.log(str.toLocaleUpperCase());
console.log(str.toLowerCase());
console.log(str.toString());
console.log(str3.trim());
console.log(str3.trimEnd());
console.log(str3.trimStart());
console.log(str3.valueOf());
// ust like toString(), valueOf() is primarily used when you want to explicitly convert an object to its primitive value. However, for strings, calling valueOf() simply returns the string itself.


 
 
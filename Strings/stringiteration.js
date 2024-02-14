const striing ="mimohshukla"
for (let index = 0; index < striing.length; index++) {
    console.log(striing[index]);
   
    
}
for (const i of striing) {
    console.log(i);
    
}
Array.from(striing).forEach(element => {
    console.log(element);
});
const string="mimoh"
result=striing.split("")
result.forEach(function (params) {
    console.log(params);
    
})
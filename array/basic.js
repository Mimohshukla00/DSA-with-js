const arr=[1,2,3,4,5,6,7,8,9,10]
const arr2=new Array(10,20,30,40,50,60)
const arr3=["mimoh","prashant","ansh"]
console.log(arr);
console.log(arr2);
console.log(arr3);


for (let index = 0; index <= arr.length; index++) {
    
    console.log(index);
    
}
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
arr.forEach((Element)=>{
    console.log(Element);
}
)
arr.forEach(function(params) {
    console.log(params);
    
})
for (const i of arr2) {
    console.log(i);
    
}
// for (const [key,value] in arr3) {
//     console.log([key,value]);
    
// }





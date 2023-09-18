let arr=[1,2,3,4,5,6];
arr.push(7);//Adds Elements at last
console.log(arr);
arr.unshift(0);//ADDS ELEMENTS AT FRONT
console.log(arr);
arr.pop();//Remove Element from last
console.log(arr);
arr.shift()//Remove element from front
console.log(arr);
//SPLICE => Used for insertion and deletion of elements
//arr.splice(SI,Count[no of element deleted from st index),Elements to be added =>Put them)
arr.splice(0,2,0,5);
console.log(arr);
arr.splice(0,0,1,2,3,4,5,6,7,8);
console.log(arr);
//SLICE => Orininal Array does not get manipulated
// SLICE...It extracts all elements from starting index
//SPLICE => Original Array gets Manipulated
//arr.slice(SI,EI);
arr.slice(6,13);
console.log(arr); // Same array get outputed as input bcoz original array does not get manipulated in this method
let arr2 = arr.slice(0,7);
console.log(arr2);//
let arr3 = arr.slice(-15,-20);
console.log(arr3);
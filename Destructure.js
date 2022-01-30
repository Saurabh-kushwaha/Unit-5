// 1st
const userDetails = {
    name: 'masai',
    password: 'admin@123',
    hostname: 'masaischool',
    client: 'chrome'
}

const { name, password } = userDetails;
console.log(name);
console.log(password);

// // 2nd
const userData_1 = {
    name: 'masai',
    address: { pincode: 560095 }
}
let { pincode } = userData_1.address;
pincode = 209402
console.log(pincode);

// // 3rd
let a, b, rest;
[a, b, rest] = [100, 200, 500, 600];
console.log(a);
console.log(b);

// 4th
let x_1, y, rest_1;
[x_1, [...rest_1]] = [100, [50, 60, 70]];
let result = rest_1.filter(ele => ele===50);
console.log(result);

// 5th
const userData = [
   [  1, {  
     arr: [ 1, 2, 3 ] 
   }
  ] 
]
let x = userData[0][1].arr;
let rest_2 = x;
let result_2 = rest_2.filter(ele => ele===2 || ele===3);
console.log(result_2)




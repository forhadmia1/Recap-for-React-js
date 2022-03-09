//১. কিভাবে let, const দিয়ে ভেরিয়েবল লিখতে হয়,কখন কোনটা ইউজ করে তুমি কি জানো ?
let myName = 'Forhad';
const myFatherName = 'Mojidul Islam';

//২.১ কিভাবে কন্ডিশন লিখতে হয়, ছয় রকমের কন্ডিশন (>, <, ===, !==, >=. <=) কোনটা কোন জিনিসের জন্য ইউজ করবে। এছাড়াও && বা ।। দিয়ে কিভাবে একাধিক কন্ডিশন এর মধ্যে দুইটাই ফুলফিল করতে হবে আবার দুইটার যেকোন একটা ফুলফিল করতে হবে, সেটা কিভাবে করবে 
if(6>5){
    console.log(6)
}
if(5<6){
    console.log(5)
}
if(6===6){
    console.log('they are equal and same type')
}
if(6!=='5'){
    console.log('they are not equal and same type')
}
if(6>=5){
    console.log(6)
}
if(5<=6){
    console.log(5)
}
//২.২. এক বা একাধিক কন্ডিশন দিয়ে কিভাবে if-else লিখে আবার কখন if-else-if - else লিখে। সেই রকম একটা উদারহণ চিন্তা করে তুমি লিখে ফেলো 
//multiple condition &&, ||
if(5>6 && 6>7){
    console.log('both condition are true')
}
else if(5>6 || 7>6){
    console.log('one condition is true')
} else {
    console.log('noting')
}

//3. array কিভাবে ডিক্লেয়ার করে array এর মধ্যে length, index, push, pop, indexOf, includes এইগুলা কিভাবে কাজ করে। কোনটা দিয়ে কি করে? সেগুলা কি তুমি জানো?
const numbers = [12,20,14,15,36,58]
console.log(numbers.length); // check the length of the array
numbers[0]=15;  //set new value
numbers.push(48); //add a new number in last
numbers.pop(); // delete a number from last
numbers.shift(); //delete a number from first 
numbers.unshift(12); // add a number in first
numbers.indexOf(25); // check the number is in array or not if not return -1
console.log('this is ',numbers.includes(2)) // check the numbers is in array or not

//৪. দুইটা বেসিক লুপ ,এর মধ্যে for loop তোমাকে জানতেই হবে। while লুপটাও দেখে রাখতে পারো। যদিও আমরা এই দুইটা লুপই কম ইউজ করবো। তাও কখনো লাগলে যেন তুমি বুঝে ফেলতে পারো।  
for (let i= 0; i<10; i++){
    console.log(i)
}

let i=0;
while(i<10){
    console.log(i);
    i++;
}

for(const n of numbers){ //for of loop for array
    console.log(n)
}

for (const name in object){
    console.log(name) //for in loop for object 
}
 
// ৫. function একটা অবশ্য জিনিস। বিশেষ করে সিম্পল একটা ফাংশন কখন ডিক্লেয়ার করতে হয়। কখন ফাংশন থেকে return করে। আর কিভাবে ফাংশন এর মধ্যে parameter নিতে হয়। 
function add(num1,num2){
    return num1 + num2;
}
console.log(add(20,25));

//৬. আখেরি রত্ন হচ্ছে Object তাই কোন একটা অবজেক্ট কিভাবে ডিক্লেয়ার করে। সেখান property কিভাবে কিভাবে একসেস করা যায়। এছাড়াও অবজেক্ট এর প্রপার্টি এর ভ্যালু হিসেবে কিভাবে array, object ইউজ করা যায়। 
const person = {
    name:'Forhad',
    age : 22,
    hobby:['web dev', 'reading', 'sleep']
}
//access property with different ways
console.log(person.name)    
console.log(person['name'])
const Name = 'name';
console.log(person[Name])
console.log(person.hobby[1])

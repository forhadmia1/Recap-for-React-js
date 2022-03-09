// ১.১ অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা ২ দিয়ে গুণ করে গুণফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।

const numbers = [12,24,14,45,87,58,21,1,4,5,14]
const newNumbers = numbers.map(num =>num*2);
console.log(newNumbers)

// ১.২. জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয় সেটার একটা সামারি লিখে ফেলো। 
//map take element and do something and return an array;
// for each take element and do something but dont return;
// filter take element and return those are fulfil the condition in an array;
// find loop all element and return the first element which fulfill the condition;

// ২. ternary অপারেটর কি ? এইটা দিয়ে শর্টকার্টে কিভাবে if-else লিখে 

const isTrue = true;
const result = isTrue? 'i am true' : 'i am false';
console.log(result)

// ৩. লজিক্যাল এন্ড (&&) আর লজিক্যাল or (।।) এই দুইটা সম্পর্কে হালকা ধারণা 
//&& condition is true when both condition fulfill the criteria;
// || condition is true when anyone condition fulfill the criteria;

// ৪. JSON এর stringify এবং parse কখন কোনটা ইউজ করে 

// when we set data to localstorage then use stringfy
// when we get data from localstorage and use them at first we parse them;

// ৫. ++, --, +,-, +=, -= এইগুলা কি জিনিস। কোনটা দিয়া কি করে সেটা বুঝলেই হবে। তাছাড়া active = !active এইটা এর মানে কি। 
//++ increment the value by 1
//-- decrement the value by 1
//+= add and assign the value
//-= subtraction and assign the value
// + addition
// - subtruction
// ৬. Object.keys, Object.values জিনিসগুলা জানা থাকলেও ভালো। 
const student = {
    name :'forhad',
    age :22,
    profession:{
        role:'web dev',
        salary: 25000
    }
}

const key = Object.keys(student); // return property key
const value = Object.values(student); // return value 
const keyValue = Object.entries(student); // return key and value both
console.log(keyValue)

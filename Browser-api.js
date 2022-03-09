// ১. লোকাল স্টোরেজ, সেশন স্টোরেজ কোনটা কখন ইউজ করবে। কিভাবে ইউজ করবে 
const student = {
    name :'forhad',
    age :22,
    profession:{
        role:'web dev',
        salary: 25000
    }
}
localStorage.setItem('User', JSON.stringify(student));
const studentjson =localStorage.getItem('User')
const studentobj = JSON.parse(studentjson)
console.log(studentobj)

// ২. location API কিভাবে ইউজ করবে ব্রাউজারে 
const hash = location.hash
const link=location.href
console.log(link)
// ৩. history API কিভাবে ইউজ করে 
history.back();
history.go(1)
history.length
history.forward()


// ৪. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে (হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে।
const loadPhotos = ()=>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => display(data.slice(0,100)))
}
loadPhotos()
const display=photos=>{
    const container = document.getElementById('card-container');
    photos.forEach(photo => {
        console.log(photo)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML =`
            <div class="card h-100">
            <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${photo.title}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            </div>
        `;
        container.appendChild(div)  
    });

}
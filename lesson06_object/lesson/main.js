//console.dir(document)



// Обєкт це фігурні дуєки {}
// Масив це квадратні дуєки []

const obj = {};
const arr = [{},{},{}];

// console.log(typeof obj);
// console.log(typeof arr);

// Обєкт складается з 
// Ключ + Значення

let year = new Date().getFullYear(); 

const user = {
   name: 'Sasha',
   age: 1995,
   isLogin: true,
   phone: {
      ios: "iphone",
      android: 'samsung'
   },
   getFullAge: function(){
    return year - this.age;
   },
}

//delete user.age;
user.coutry = "Ukraine";
user.name = "Sveta"
user.phone.huawey = 'm1'


//document.write(user.phone.ios);
console.log(user)
console.log(user.getFullAge());


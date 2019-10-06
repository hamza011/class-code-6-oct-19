// console.log(a);
// var a = 1;

// function fn() {
//     console.log(a);
//     var a = 10;
// }
// if(true) {
//     console.log(a);
//     var a = 10; 
// }
// fn();

// test();
// function test() {
//     x();
//     function x(){
//         console.log('X');
//     }
// };

// if(true) {
//     function x(){
//         console.log('x');
//     }
// }
// x();

// var array = [1, 2, 3, 4, 5];
var array = ['a', 'b', 'c'];

// for (var i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
// console.log(i);

// var i = 0;
// while(i < array.length){
//     // 
//     // 
//     i++;
// }

// while (confirm('Try again?')) { }

// array.forEach(function (x) { console.log(x); });

// var data = array.map(function (x) {
//     return x * 2;
// });
// console.log(array);
// console.log(data);

// var data = array.filter(function (item) { 
//     return !(item % 2);
// });
// console.log(data);

// var array = [1, 2, 3, 4, 5, 6];
// var sum = array.reduce(function (oldVal, newVal) {
//     console.log('Old', oldVal);
//     console.log('New', newVal);
//     return oldVal+newVal;
// });
// console.log(sum);

// function test() {
//     var x = 10;
//     return function () {
//         console.log('value of x: ', x);
//     }
// };
// var testOutput = test();
// testOutput();

// var num = 60;
// switch (num) {
//     case 60:
//         console.log('find');
//         break;
//     case 50:
//         console.log('not find');
//         break;
//     default:
//         console.log('not find');
// };

// function Person() { }
// Person.prototype.eat = function () {
//     console.log(this.name + ' eats');
// };
// function Student(name, age) {
//     this.name = name;
//     this.age = age;
//     // this.study = function () {
//     //     console.log('study');
//     // }
// }
// Student.prototype = new Person();
// Student.prototype.study= function () {
//     console.log('study');
// }
// var stu = new Student('taha', 20);
// var stu2 = new Student('ali', 21);
// console.log(stu)
// console.log(stu2)

// es6
// class Vehicle {
//     constructor(color) { 
//         this.color = color;
//     };
//     running() {
//         console.log('running');
//     }
// };
// class Car extends Vehicle {
//     constructor(model, color) {
//         super(color);
//         this.model = model;
//     }
//     start() { console.log(this.model + ' starts'); }
// };
// var car = new Car('abc', 'black');
// var car2 = new Car('xyz', 'red');

// function login(res) {
//     setTimeout(function () {
//         console.log('response')
//         res();
//     }, 2000);
// }
// login(function () {
//     // loadDashboard(
//     //     function () {
//     //         fetchCommits(function () {
//     //             getComments(function () {
array(function{

})
//     //             })

//     //         })

//     //     }
//     // )
//     console.log('response received')
// });

login = new Promise(function (success, error) {
    setTimeout(function () {
        console.log('response')
        success();
    }, 2000);
});
login.then(function () {
    return loadDashboar()
},
    function () { })

    .then(function () {
        return loadComments()
    },
        function () { })

    .then(function () { }, function () { })

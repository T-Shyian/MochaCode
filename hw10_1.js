var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru"
    },
];


var pattern = /^[a-z0-9]+(\.[a-z0-9]+)?@(gmail\.com|yahoo\.com)$/i;
// console.log(pattern.test("test123@gmail.com"));
// console.log(pattern.test("123TEST@yahoo.com"));
// console.log(pattern.test("test@mail.ru"));

var newArr = [];
for (var i=0; i < arr.length; i++) {
    if (pattern.test(arr[i].email)){
        newArr.push(arr[i].email);
    }      
}
console.log(newArr);
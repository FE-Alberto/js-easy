// Map 是一个含有数据的键的集合，
// 普通 Object 一样，但是它们最大的差别是 Map允许键的任何类型;

let map = new Map();
map.set('1', 'str1')
map.set(1, 'str2')
map.set(true, 'boole1');
console.log(map.size);
console.log(map.get('1'));
console.log(map);

let obj = {
    name: 'john',
    age: 30
}
let map = new Map(Object.entries(obj));
console.log(map.get('name'));

let weakMap = new weakMap();
let obj = {};
weakMap.set(obj, 'ok')

let arr = ['Ilya', 'Kantor']
let [firstName, surname] = arr;
console.log(firstName);
console.log(surname);

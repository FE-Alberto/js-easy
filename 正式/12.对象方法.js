// Object.getPrototypeOf 方法返回参数对象的原型，
var F = function () {
    
}
var f = new F();
Object.getPrototypeOf(f) === F.prototype;

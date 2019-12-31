// Promise 对象
// 有了 Promise 对象，就可以将异步操作以同步操作的流程表达出了
// 避免了层层嵌套的回调函数。

// Promise 对象是一个构造函数，用来生成 Promise实例。


// 基本用法
var promise = new Promise((resolve, reject) => {
    /* 异步操作成功 */ 
    if (true) {
        resolve(value)
    } else {
        reject(error)
    }
});
promise.then(function (value) {

}, function (value) {

})
// Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve方法和reject方法。如果异步操作成功，则用resolve方法将Promise对象的状态变为“成功”（即从pending变为resolved）；如果异步操作失败，则用reject方法将状态变为“失败”（即从pending变为rejected）。
// promise 实例生成之后，可以用 then 方法分别指定 resolve方法和reject方法回调函数。

function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

timeout(100).then(() => {
    console.log('done');
});

// 上面代码的 timeout 返回一个Promise 实例对象，表示一段时间以后改变自身状态，从而触发then方法绑定回调函数。


// AJAX
var getJSON = function (url) {
    var promise = new Promise((resolve, reject) => {
        var client = new XMLHttpRequest();
        client.open("GET", url);
        client.onreadystatechange = handler;
        client.responseType = 'json'
        client.setRequestHeader('Accept', 'application/json');
        client.send();

        function handler() {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText))
            }
        }
    });
    return promise
}
getJSON("/post.json").then(function (json) {
    console.log("Contents:" + json);
}, function (error) {
    console.error('出错了', error);
})

// Promise.prototype.then 链式操作

getJSON('/post.json').then(function (json) {
    return json.post;
}).then(function (post) {
    console.log(post, 'poceed');
})

// Promise.prototype.catch 捕捉错误
getJSON("/posts.json").then(function (posts) {
    console.log(posts);
}).then(function (comments) {
    // some code
}).catch(function (error) {
    console.log("发生错误！", error);
});

// Promise.prototype.catch 具有 冒泡性质，会一直向后传递，
// 知道被捕获为止。错误总是会被下一个catch语句捕获。


// Promise.all 方法，Promise.race 方法
var p = Promise.all([p1, p2, p3]);
// p 的状态分2种情况
// p1,p2,p3的状态都变成 fulfilled， p的状态才会变成fuifilled，
// 此时 p1,p2,p3的返回值组成一个数组，传递给p的回调函数。
// 只要p1 p2 p3中有一个被rejected， p的状态就成了rejected,此时第一个
// 被reject的实例的返回值，会传递给p的回调函数。

var p = Promise.race([p1, p2, p3]);

// Promise.resolve方法，Promise.reject方法
// 如果Promise.resolve方法的参数，不是具有then方法的对象,则返回一个新的Promise对象，
// 而它的状态为 fullfilled。

var p = Promise.resolve('Hello');
p.then(null, function (s) {
    console.log(s);
});

// async 函数是用来取代回调函数的另一种方法。
// 只要函数名之前加上 async 关键字，就表明该函数内部有的异步操作。
// 该异步操作应该返回一个 Promise 对象，前面用 await关键字注明。
// 当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再接着执行函数体内后面的语句。
async function getStockPrice(symbol, currency) {
    let price = await getStockPrice(symbol);
    return convert(price, currency);
}

function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

async function asyncValue(value) {
    await timeout(50)
    return value;
}
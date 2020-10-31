

/**
 * 1. 数据类型判断
 * 
 * Object.prototype.toString.call()返回的数据格式为 [object Object]类型，然后用slice截取第8位到倒一位，得到结果为 Object
 */
var _toString = Object.prototype.toString;
function toRawType (value) {
    return _toString.call(value).slice(8, -1);
}
// console.log(toRawType(0))

/**
 * 2. 利用闭包构造map缓存数据
 * 
 * vue中判断我们写的组件名是不是html内置标签的时候，如果用数组类遍历那么将要循环很多次获取结果
 * 如果把数组转为对象，把标签名设置为对象的key，那么不用依次遍历查找，只需要查找一次就能获取结果，提高了查找效率。
 */
function makeMap (str, expectsLowerCase) {
    // 构建闭包集合map
    var map = Object.create(null);
    var list = str.split(',');
    for (var i = 0; i < list.length; i++) {
        map[list[i]] = true;
    }
    return expectsLowerCase
        ? function (val) { return map[val.toLowerCase()]; }
        : function (val) { return map[val]; }
}
// 利用闭包，每次判断是否是内置标签只需调用isHTMLTag
var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title');
// console.log(isHTMLTag("html"))

/**
 * 3. 二维数组扁平化
 * 
 * vue中_createElement格式化传入的children的时候用到了simpleNormalizeChildren函数，原来是为了拍平数组，使二维数组扁平化，类似lodash中的flatten方法。
 */

 // vue中
function simpleNormalizeChildren (children) {
    for (var i = 0; i < children.length; i++) {
        if (Array.isArray(children[i])) {
            return Array.prototype.concat.apply([], children)
        }
    }
    return children;
  }
  
// es6中 等价于一次解构赋值
function simpleNormalizeChildrenForES6 (children) {
    return [].concat(...children)
}
// console.log(simpleNormalizeChildren([1, [2, [3, [4]], 5]]))

/**
 * 4. 方法拦截
 * 
 * vue中利用Object.defineProperty收集依赖，从而触发更新视图，但是数组却无法监测到数据的变化，但是为什么数组在使用push pop等方法的时候可以触发页面更新呢，那是因为vue内部拦截了这些方法
 */

// 重写push等方法，然后再把原型指回原方法
var ARRAY_METHOD = [ 'push', 'pop', 'shift', 'unshift', 'reverse',  'sort', 'splice' ];
var array_methods = Object.create(Array.prototype);
ARRAY_METHOD.forEach(method => {
    array_methods[method] = function () {
        // 拦截方法
        console.log('调用的是拦截的 ' + method + ' 方法，进行依赖收集');
        return Array.prototype[method].apply(this, arguments);
    }
});

// var arr = [1,2,3]
// arr.__proto__ = array_methods // 改变arr的原型
// arr.push(6) 

/**
 * 5. 继承的实现
 * 
 * vue中调用Vue.extend实例化组件，Vue.extend就是VueComponent构造函数，而VueComponent利用Object.create继承Vue，所以在平常开发中Vue 和 Vue.extend区别不是很大。
 * 这边主要学习用es5原生方法实现继承的，当然了，es6中 class类直接用extends继承。
 */

 // 继承方法 
function inheritPrototype(Son, Father) {
    var prototype = Object.create(Father.prototype)
    prototype.constructor = Son
    // 把Father.prototype赋值给 Son.prototype
    Son.prototype = prototype
}
function Father(name) {
    this.name = name
    this.arr = [1,2,3]
}
Father.prototype.getName = function() {
    console.log(this.name)
}
function Son(name, age) {
    Father.call(this, name)
    this.age = age
}
inheritPrototype(Son, Father)
Son.prototype.getAge = function() {
    console.log(this.age)
}

/**
 * 6. 浅拷贝
 * 
 * 简单的深拷贝我们可以用 JSON.stringify() 来实现，不过vue源码中的looseEqual 浅拷贝写的也很有意思，先类型判断再递归调用，总体也不难，学一下思路。
 */

function looseEqual (a, b) {
    if (a === b) { return true }
    var isObjectA = isObject(a);
    var isObjectB = isObject(b);
    if (isObjectA && isObjectB) {
        try {
            var isArrayA = Array.isArray(a);
            var isArrayB = Array.isArray(b);
            if (isArrayA && isArrayB) {
                return a.length === b.length && a.every(function (e, i) {
                    return looseEqual(e, b[i])
                })
            } else if (!isArrayA && !isArrayB) {
                var keysA = Object.keys(a);
                var keysB = Object.keys(b);
                return keysA.length === keysB.length && keysA.every(function (key) {
                    return looseEqual(a[key], b[key])
                })
            } else {
            /* istanbul ignore next */
                return false
            }
        } catch (e) {
            /* istanbul ignore next */
            return false
        }
    } else if (!isObjectA && !isObjectB) {
        return String(a) === String(b)
    } else {
        return false
    }
}
function isObject (obj) {
    return obj !== null && typeof obj === 'object'
}

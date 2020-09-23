class KPromise {
    constructor(handle) {
        // [[promiseStatus]]  
        this.status = "pending";
        this.value = undefined;

        // 数组队列保存；
        this.resolveQueue = [];
        this.rejectQueue = [];

        handle(this._resolve.bind(this), this._reject.bind(this))
    }
    _resolve (val) {
        this.status = "fulfilled"
        this.value = val;
        // 执行 onResolved；
        const run = () => {
            let cb;
            while (cb = this.resolveQueue.shift()) {
                cb && cb(val);
            }
        }
        // let ob = new MutationObserver(run)
        // ob.observe(document.body, {
        //     attributes: true
        // })
        // document.body.setAttribute("kkb", Math.random());
    }
    _reject (val) {
        this.status = "rejected"
        this.value = val;
        const run = () => {
            let cb;
            while (cb = this.rejectQueue.shift()) {
                cb && cb(val);
            }
        }
        // let ob = new MutationObserver(run)
        // ob.observe(document.body, {
        //     attributes: true
        // })
        // document.body.setAttribute("kkb", Math.random());
    }
    then (onResolved, onRejected) {

        return new KPromise((resolve, reject) => {
            this.resolveQueue.push(val => {
                let res = onResolved && onResolved(val);
                if (res instanceof KPromise) {
                    return res.then(resolve);
                }
                resolve(res)
            })
            this.rejectQueue.push(val => {
                onRejected && onRejected(val);
                reject(val);
            })
        })
    }
    catch (onRejected) {
        this.then(undefined, onRejected);
    }
    static resolve (val) {
        return new KPromise(resolve => {
            resolve(val);
        })
    }
    static reject (val) {
        return new KPromise((resolve, reject) => {
            reject(val);
        })
    }
    static all (lists) {
        let arr = [];
        return new KPromise((resolve) => {
            lists.forEach(item => {
                item.then(res => {
                    arr.push(res);
                    if (arr.length === lists.length) {
                        resolve(arr);
                    }
                })
            })
        })
    }
    static race (lists) {
        return new KPromise((resolve, reject) => {
            lists.forEach(item => {
                item.then(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
            })
        })
    }
    finally (cb) {

    }
}
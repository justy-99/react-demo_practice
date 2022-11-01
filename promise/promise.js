const PROMISE_STATE = {
  PENDING: 0,
  FULFILLED: 1,
  REJECTED: 2
}

class myPromise {
  #state = PROMISE_STATE.PENDING
  #result = null

  #callbacks = []

  constructor(executor) {
    executor(this.#resolve.bind(this), this.#reject.bind(this))
    
  }

  #resolve(value) {
    if(this.#state !== PROMISE_STATE.PENDING) return

    this.#result = value
    this.#state = PROMISE_STATE.FULFILLED

    queueMicrotask(() => {
      this.#callbacks.forEach( cb => {
        cb()
      })
    })
  }

  #reject(value) {
    if(this.#state !== PROMISE_STATE.PENDING) return

    this.#result = value
    this.#state = PROMISE_STATE.REJECTED
  }

  then(onFulfilled, onRejected) {
    return new myPromise((resolve,reject) => {
      if(this.#state === PROMISE_STATE.PENDING) {
        this.#callbacks.push(() => {
          resolve(onFulfilled(this.#result))
        })
      }else if(this.#state === PROMISE_STATE.FULFILLED) {
        queueMicrotask(() => {
          resolve(onFulfilled(this.#result))
        })
      } else if(this.#state === PROMISE_STATE.REJECTED) {
        queueMicrotask(() => {
          reject(onRejected(this.#result))
        })
      } 
    })

  }

}


const promise1 = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(666)
  }, 1000);
  // resolve(666)
  
})

promise1
  .then((res) => {
    console.log('prmise1',res);
    return 777
  }, (err) => {

  })

console.log('123');

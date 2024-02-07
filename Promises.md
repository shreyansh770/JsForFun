## Promises

-> Promises are token which represent the outcome of future task
->the outcome of this token is decided by
the promise provider
-> promises have just one outcome either resolve or rejcet
-> promises gets resolved or rejected *only* once in its life time

## Promises v/s callback

-> promises are better than callback bcoz:

1.  promises are pushed into microtask queue which has higher priority than normal queue in which callbacks are pushed
2.  callbacks needs to be passed to a function and and we are completely dependend on that function to run our callbacks properly which this problem is called 'inversion control'

## Facts

1. promise->
   initial:
   _ state-> pending, value -> undefined  
   finally:
   _ state : resolved -> value: value passed while calling the resolve function \* state : rejected-> value:error
2. to consume a promise we have two **Synchronous function** then and catch. They are used to register cb function on that promise.
3. functions inside then and catch are also async
4. then & catch also gives promises
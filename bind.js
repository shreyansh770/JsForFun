
// for indirect function 'this' is undefined or windows obj
// if we want it to point at the parent obj we have few methods

// https://www.freecodecamp.org/news/understand-call-apply-and-bind-in-javascript-with-examples/

// 1.Arrow Function

let obj ={
    name:"rahul",
    f : function(){
        let g = ()=>{
            console.log(this);// obj
        }

        g();
    }
}

// obj.f();

/* jaha se below methods(call,apply,bind) apply honge vaha ki 'this' ki value jaegi  */

// 2. call Method

let obj1 ={
    name:"rahul",
    f : function(){
        function g (){
            console.log(this);// obj
        }

        g.call(this); //  here this is pointing to obj-> so g ka 'this' bhi obj bn jyega
    }
}

// obj1.f();



let obj2 ={
    name:"rahul",
    f : function(){
        function g (x,y,z){
            console.log(x+y+z);
            console.log(this);// obj
        }

        g.call(this,1,2,3); //  'this' g ka 'this' bn jayega aur bki sari as args chle jaenge
    }
}

// obj2.f();


// 3 . apply method -> works exactly as call only subtle diff->i.e args should be passed in an array


let obj3 ={
    name:"rahul",
    f : function(){
        function g (x,y,z){
            console.log(x+y+z);
            console.log(this);// obj
        }
       
        let arr = [1,2,3]
        g.apply(this,arr); 
    }
}

// obj3.f();


// 4 .  bind method-> gives a new function


let obj4 ={
    name:"rahul",
    f : function(){
        function g (x,y,z){
            console.log(x+y+z);
            console.log(this);// obj
        }
       
        
        let newG = g.bind(this); //  bind will give a new function with in which 'this' = to the obj
        newG(1,2,3)
    }
}

obj4.f();
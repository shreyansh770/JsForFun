
// currying with bind
function add(a,b){
    console.log(a+b);
}

let add2 = add.bind(this,2);
add2(3)

// currying wit closure

function add_(x){
    return function(y){
        console.log(x+y);
    }
}

let add3  = add_(2)

add3(4)

function f(){
    console.log(this);
}

f.call(this)

    
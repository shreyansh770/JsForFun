console.log("line-1",x);

var x = 10;

 // b defination
function b(){
    console.log("line-6",x); // 10
}

function fn(){
    console.log("line-10",x);
    var x = 9;
    // function b(){
    //     console.log("line-6",x); // 9
    // }
    b(); //  b call
    console.log("line-13",x);
}

fn();

// scope -> area where a function or a variable can be found 

// Lexical scope is from decided from where the function is  defined not from where the function is called
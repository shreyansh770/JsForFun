

//  var inside function is function scoped

// var a = 10;

// console.log("line -3" ,a);

// function fn(){
//     console.log("line 10" , a);
//     var a = 10;
//     console.log(a);
//     if(a == 10){
//         var a = 20;
//         a++;
//         console.log("line 16" , a);
//     }

//     console.log("line 19",a);

// }

// fn();
// console.log("line  24",a);

function f(x){

    let si = 1.0;
    let ei =x*1.0;

    let itr = 30;
    while(itr-->0){

        let mid = (si+ei)/2;

        if(mid*mid==x) return mid;

        else if(mid*mid>x) ei=mid-0.1;

        else si = mid+0.1;
    }

    return ei;
}

console.log(f(2));
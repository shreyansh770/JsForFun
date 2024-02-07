// let obj = {
//     arr : [1,2,3],
//     f : function(){
//         function f2(){
//             this.arr.map(function(itm){
//                 console.log(itm*2) // undefined & error
//             })
//         }

//         f2();
//     }
// }

// obj.f();


// arrow Function mere this ki koi value nhi apne bhar jo this ki value hogi vohi mere andar bhi this ki value hogi

let obj1 = {
    arr : [1,2,3],
    f : function(){
        let f2 = ()=>{
            /* f2 ka 'this' f ka 'this' hoga mtlb obj1 ko point krega*/
            this.arr.map((itm)=>{
                console.log(itm*2) 
            })
        };

        f2();
    }
}

obj1.f();


let f3 = ()=>{
    console.log(this); // window obj
}

let f4 = function(){
    let f5 = () =>{
        console.log(this);// window obj
    }

    f5();
}

f4();
function mySetInterval(fn, timeout) {

    let clearObj = {
        shallRun: true
    }

    function larger() {

        if (clearObj.shallRun == false) return;

        fn();
        setTimeout(larger, timeout);
    }

    if(clearObj.shallRun == true){
        setTimeout(larger, timeout);
    }

    return clearObj;
}

function fn() {
    console.log("Hello JS");
}

let clearMe = mySetInterval(fn, 2000);

function myClearInterval(clearMe) {
    clearMe.shallRun = false;
}


setTimeout(() => {

    myClearInterval(clearMe);
    console.log("cleared");

}, 10000)
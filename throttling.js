// In JavaScript, throttling is a technique used to limit the rate at which a function can be executed. It ensures that a particular 
// function is not invoked more than once within a specified time interval, even if it's called multiple times


const expensiveFunction = ()=>{
 
    console.log("Expensive API call");
}


window.addEventListener("resize", betterFun)


// throtlling

const betterFun = (expensiveFunction , limit)=>{
      let flag = true;
      return ()=>{

          if(flag){
            expensiveFunction()
            flag = false;
            setTimeout(()=>{
               flag = true;
            },limit)
          }
      }
}

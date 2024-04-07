// In JavaScript, throttling is a technique used to limit the rate at which a function can be executed. It ensures that a particular
// function is not invoked more than once within a specified time interval, even if it's called multiple times

const expensiveFunction = () => {
  console.log("Expensive API call from ");
};

// throtlling

const throttle = (func, limit) => {
  let flag = true;
  return () => {
    if (flag) {
      func();
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};
window.addEventListener("resize", throttle(expensiveFunction, 1000));

// debouncing

const debounce = (func , limit) => {
  let timeout;
  return () => {
    clearTimeout(timeout)
    timeout = setTimeout(() =>{func()},limit)
  };
};

window.addEventListener("resize", debounce(expensiveFunction,1000))

/* Difference between Debouncing and throttling */

/* Although both have same problem statement to fix they do it in a very different way

   Debouncing : It limit's a function call based on a 
                freq between two events
                It states that if the freq between let's say 
                two "key press" event is 100 ms then only make an api call
 
 
 
   Throttling :  It states that a function call would be made only 
                 after a certain period of time irrespective of any event
                 occuring in between that time period
                 
    
    We can therefore say that 
    1) debouncing is very "Action dependent" 
    2) and throttling is "Developer dependent" that means a certain action should only happen after a fixed period


    Practical Uses : 
    1) Seach bars 
    2) Button click to add cart

    Why use deboucing in search bar?
    -> coz user should not wait for a x time after tying a product name
       if we would use throttling here it would make function call only after a 
       limit has passed

    Why use throttling in Add cart?
    -> Let say user click on add cart and we have to add product to cart
       if we throttling it would make a better sense becoz a product would be added to the cart
       only after a set interval of time irrespective of how fast or slow user
       is performing the button clicks if we would have used deboucing 
       it would have become very user dependent and some unwanted times the product would have
       been added to the cart
 
 */

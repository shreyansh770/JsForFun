const users = [
    {firstName: 'John', lastName: 'saini' , age:26},
    {firstName: 'deepika', lastName: 'saini' , age:75},
    {firstName: 'rahat', lastName: 'saini' , age:50},
    {firstName: 'neeraj', lastName: 'saini' , age:26}
]

const output = users.reduce((acc,curr)=>{
 
   if(curr.age < 30){
        acc.push(curr.firstName)
   }

   return acc;
},[])

console.log(output);
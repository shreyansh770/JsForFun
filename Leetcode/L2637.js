var timeLimit = function(fn, t) {
    
	return async function(...args) {
        return new Promise((resolve,reject) => {
            setTimeout(() => reject("Time Limit Exceeded"),t);
            fn(...args).then((result)=>{
                // console.log(result);
                resolve()
            }).catch(reject)
        })
    }
};

const limited = timeLimit((t) => new Promise(res => setTimeout(res("done"), t)),1000)

limited(70).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})
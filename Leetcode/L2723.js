var addTwoPromises = async function(promise1, promise2) {
    return Promise.all([promise1, promise2])
        .then((res) => {
            return res.reduce((acc, val) => {
                return acc + val;
            }, 0);
        })
        .catch((err) => {
            console.log(err);
        });
};

let p1 = new Promise((resolve, reject) => {
    setTimeout(resolve(1),1000)
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(resolve(2),1000)
})

addTwoPromises(p1,p2).then((ans)=>{
    console.log(ans);
})
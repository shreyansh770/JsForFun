let p = new Promise(function (resolve, reject) {
    reject(new Error("some error"));
    setTimeout(function () {
      reject(new Error("some error"));
    }, 1000)
    reject(new Error("some error"));
  });
  // p.then(null,fcb); -> p.catch(fcb);
  p.then(null, function (err) {
    console.log(1);
    console.log(err);
    // agr yaha se kuch error return krenge to
    // agla catch chlega
  })
  // fcb
  .catch(function (err) {
    console.log(2);
    console.log(err);
  });

  // then.(scb,fcb) if scb == null then fcb chla do isse then resolve and reject dono ko sambhal leta hai 
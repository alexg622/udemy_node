const asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a === "number" && typeof b === "number"){
        resolve(a + b)
      } else {
        reject("Argumnets must be numbers")
      }
    }, 1500)
  })
}

asyncAdd(5, 7).then(res => {
  console.log(res);
  return asyncAdd(res, 33)
}, error => {
  console.log(error);
}).then((res) => {
  console.log(res);
}, err => {
  console.log(err);
})

// let somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hey, it worked")
//     // reject("Unable to fulfill promise")
//   }, 2000)
// })
//
// somePromise.then((message) => {
//   console.log(message);
// }, (errorMessage) => {
//   console.log(errorMessage);
// })

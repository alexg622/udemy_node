console.log("Starting app");

setTimeout(() => {
  console.log("inside of callback");
}, 2000)
setTimeout(() => {
  console.log("Secont set timeout");
}, 0)

console.log("finishing up");

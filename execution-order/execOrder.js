setTimeout(() => {
  console.log("1");
});

new Promise((resolve) => {
  console.log("2");
  resolve();
}).then(() => {
  console.log("3");
});

console.log("4");

new Promise((resolve, reject) => {
  reject("5");
}).catch(console.log);

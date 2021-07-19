const ref = console.log;


console.log = (text) => {
    ref(new Date()+" "+text);
}
console.log("aaa");

console.log("bbbb");
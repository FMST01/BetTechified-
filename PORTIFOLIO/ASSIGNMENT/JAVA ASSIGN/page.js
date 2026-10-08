let firstName = "John"
let surname = "Matthew"
const age = 30
console.log (firstName)
console.log (surname)
console.log (age)
if (age >=18) {
    console.log ("Adult");
} else {
    console.log ("Minor")
}

for (let i=1; i<=5; i++) {
    console.log ("number" +i);
}

document.getElementById("get").addEventListener("click",() => {alert("Welcome to Fanulous Multi-Purpose, ypour Satisfaction is our priority");
});


document.getElementById("fmst").addEventListener("click",() => {
    document.getElementById("comm").innerText="You are good to go"
})
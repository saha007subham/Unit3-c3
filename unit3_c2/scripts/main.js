
document.getElementById("form").addEventListener("submit", submitFn);

let arr = JSON.parse(localStorage.getItem("user")) || [];

function userCredsFn(n,e,add,amt){
    this.name = n
    this.email = e
    this.address = add
    this.amount = amt
}

function submitFn(event){
    event.preventDefault();

    let form = document.getElementById("form");

    let name = form.name.value;
    let mail = form.email.value;
    let address = form.address.value;
    let amount = form.amount.value;

    let userData = new userCredsFn(name,mail,address,amount);

    console.log(userData);

    arr.push(userData);
    

   // console.log(arr);

   localStorage.setItem("user", JSON.stringify(userData));

  // arr.push(userData);

  document.getElementById("name").value = null;
  document.getElementById("email").value = null;
  document.getElementById("address").value = null;
  document.getElementById("amount").value = null;

}



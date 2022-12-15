//jo variable declare kiye bina use kiya jayega ; woh variable automatically global variable ho jayega
//declare na karna matlab ?
//---declare na karne ka matlab hota hai ; not using the keywords let , var , const

function greet() {
  a = "hello"; //declared without using any of the three keywords let , var , const
}

greet();

console.log(a);
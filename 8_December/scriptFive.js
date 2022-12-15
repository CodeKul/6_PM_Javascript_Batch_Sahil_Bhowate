//Do not use the arrow function as the property value of the object.
//Because the value of this keyword in that case is not that object's reference.

let poolJump = {
  count: 3,
  // jumps: () => {
  //   this.count++
  // }

  jumps: function () {
    this.count++
  }
}

poolJump.jumps();
console.log(poolJump);

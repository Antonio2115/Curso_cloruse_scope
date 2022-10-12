const myGlobalvalValue = 0;

function myFunction() {
  const myNumber = 1;
  console.log(myGlobalvalValue);

  function parent() { // function interna
    const inner = 2;
    console.log(myNumber, myGlobalvalValue);

    function child() {
      console.log(inner, myNumber, myGlobalvalValue);
    }

    return child();
  }

  return parent();
}

myFunction();
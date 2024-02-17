function operation(a, b) {
  let ops = 0

  while (a !== b){

    if ( a % 2 > 0 && a != 1){
      a = (a - 1) / 2 
      // console.log("case 1", a)
      ops++
    }

    else if (a < b && b % 2 == 0){
      a = a * 2 
      // console.log("case 2", a)
      ops++
    }

    else if (a > b && a % 2 == 0){
      a = a / 2 
      // console.log("case 3", a)
      ops++
    }


  }

  console.log('args: ',a,b, "ops: ", ops);
  return ops
}


console.log(operation(3,8))
// console.log(16 % 4);
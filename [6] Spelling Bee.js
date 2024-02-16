column = function (hive) {
  let result = [], temp = ''
  if (hive == null || hive.length == 0){ return 0 }

  for (let i = 0; i < hive.length; i++) { temp += hive[i].join('') + "." }
  result.push(temp.split('.'))
  
  for (let i = 0; i < hive.length; i++) { 
    temp = ''
    for (let j = hive[i].length - 1; j >= 0; j--){ temp += hive[i][j]}
    result.push(temp.split('.'))
  }

  return result
}



row = function (hive) {
  let forward = [], backward = [], result = [], fafq = ''
  if (hive == null || hive.length == 0){ return 0 }

  // Forward
  for (let i = 0; i < hive[0].length; i++) {
    fafq = ''
    for (let j = 0; j < hive.length; j++) { fafq += hive[j][i] }
    forward.push(fafq.split('.'))
  }

  //Backward
  for (let i = 0; i < hive[0].length; i++) {
    fafq = ''
    for (let j = hive.length - 1; j >= 0; j--) { fafq += hive[j][i] }
    backward.push(fafq.split('.'))
  }
  result.push(forward, backward)

  return result
}

howManyBees = function (hive) {
  let hiveArray = []
  let beeCount = 0

  if (hive == null || hive.length == 0){ return 0 }
  for (let i = 0; i < hive.length; i++) { hiveArray.push(hive[i]) }
  let mergedArray = [...column(hiveArray), ...row(hiveArray)]

  mergedArray = mergedArray.flat(Infinity)
  
  mergedArray.forEach(element => {
    let match = element.match(/bee/g) 
    if (match){beeCount+= match.length}
  })
  console.log(mergedArray);

  return beeCount
}


/* Train */

_show = function (hive) {
  if (hive != null) {
    for (var y = 0; y < hive.length; y++) {
      console.log(hive[y].join(''))
    }
  }
  return hive
}

// =================================

// var hive = ['bee.bee'.split(''), '.e..e..'.split(''), '.b..eeb'.split('')]
var hive = null

// .b..eeb..e..e.eeb.eeb

console.log(howManyBees(hive))
// _show(hive)
// column(hive)
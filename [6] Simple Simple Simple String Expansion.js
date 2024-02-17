function stringExpansion(s) {
  let result = "", epoch = null

  for (let i = 0; i < s.length; i++) {
    if (!isNaN(Number(s[i])) ){ epoch = Number(s[i]) }
    else if ( isNaN(Number(s[i])) && epoch !== null){ for (let j = 0; j < epoch; j++){ result+=s[i] }}
    else { result+=s[i] }
  }
  return result
}

console.log(stringExpansion('3D2a5d2f'));
console.log(stringExpansion('3abc'));
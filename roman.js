function Roman(s) {
  let obj = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000,
  };

  let num = 0;
  for(let i = 0; i < s.length; i++){
    if(s[i] == "I" && (s[i + 1] == "V" || s[i + 1] == "X")){
        num += obj[s[i + 1]] - obj[s[i]];
        i++
    }else if(s[i] == "X" && (s[i + 1] == "L" || s[i + 1] == "C")){
        num += obj[s[i + 1]] - obj[s[i]];
        i++
    }else if(s[i] == "C" && (s[i + 1] == "D" || s[i + 1] == "M")){
        num += obj[s[i + 1]] - obj[s[i]];
        i++
    }else {
        num += obj[s[i]];
    }
    
}
return num;

}

console.log(Roman('VI'));

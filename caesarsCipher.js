function rot13(str) {
  let arr = str.toUpperCase().split('');
  arr = arr.map((x) => {
    if (x.charCodeAt(0) <= 90 && x.charCodeAt(0) >=78) {
      return String.fromCharCode(x.charCodeAt(0) - 13);
    }
    else if(x.charCodeAt(0) >=65 && x.charCodeAt(0) < 78) {
      return String.fromCharCode(x.charCodeAt(0) -13 + 26);
    }
    return x;
  });
  return arr.join('');
}

rot13("SERR PBQR PNZC");
function palindrome(str) {
  let regex = /[a-z0-9]/gi;
  let arr = str.toLowerCase().match(regex);
  let arr_length = arr.length;
  for (let i = 0; i < Math.floor(arr_length / 2); i++) {
    if (arr[i] !== arr[arr_length - i - 1]) {
      return false;
    }
  }
  return true;
}

palindrome("eye");
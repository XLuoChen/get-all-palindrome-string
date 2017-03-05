function getAllPalindromeStr(str) {
  //在这里实现函数
  const result = [];
  let length = str.length;
  while (length > 0) {
    let subString = str.slice(0, length);
    result.push(subString.split('').reverse().join(''));
    length--;
  }

  return result;
}

module.exports = getAllPalindromeStr;
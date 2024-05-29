function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const strMap1 = {};
  const strMap2 = {};
  for (let i = 0; i < str1.length; i++) {
    strMap1[str1[i]] = (strMap1[str1[i]] || 0) + 1;
    strMap2[str2[i]] = (strMap2[str2[i]] || 0) + 1;
  }

  console.log(strMap1)
  console.log(strMap2)


  for (let [key, value] of Object.entries(strMap1)) {
    if (strMap2[key] !== value) return false
  }

  return true
}

const result = isAnagram('anagram', 'ramanag')

console.log(result)
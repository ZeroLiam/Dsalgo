function reverse(str){
  // add whatever parameters you deem necessary - good luck!

  if(str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
//   let s = '';
//  str = str.split('');
//   const helper = (vaina) => {
//       if(vaina.length === 0) return s;
//       s += vaina.pop();
//       return helper(vaina);
//   }
//   return helper(str);
}

console.log('awesome', reverse('awesome'));
console.log('hannah', reverse('hannah'));
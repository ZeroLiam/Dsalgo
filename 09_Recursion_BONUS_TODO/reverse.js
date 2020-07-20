function reverse(str){
    // add whatever parameters you deem necessary - good luck!
    let s = '';
   str = str.split('');
    const helper = (vaina) => {
        if(vaina.length === 0) return s;
        s += vaina.pop();
        return helper(vaina);
    }
    return helper(str);
  }
  
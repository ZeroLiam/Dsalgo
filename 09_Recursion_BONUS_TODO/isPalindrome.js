// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(word) {
    // add whatever parameters you deem necessary - good luck!
    //Edge cases:
    //1. if word is empty, an empty array or object, return false
    //2. if it's not an array, return false
    if (!word || typeof word !== 'string') return false;
    //1. Make it an array
    //2. Compare from right to left
    //  (a) if there's a single mismatch return false
    //  (b) else return true
    word = word.split('');
    let [left, right] = [0, word.length - 1];

    while (left < right) {
        if (word[left] !== word[right]) return false;
        left++;
        right--;
    }

    return true;

}

console.log(isPalindrome('awesome'));
console.log(isPalindrome(''));
console.log(isPalindrome('tacocat'));
console.log(isPalindrome('hannah'));
console.log(isPalindrome([]));
console.log(isPalindrome('amanaplanacanalpandemonium'));
console.log(isPalindrome());
console.log(isPalindrome({}));
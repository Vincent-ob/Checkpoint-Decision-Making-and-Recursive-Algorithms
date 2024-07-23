function isPalindrome(str) {

    function cleanString(s) {
        return s.toLowerCase().replace(/[^a-z0-9]/g, '');
    }

    const cleanedStr = cleanString(str);

    function checkPalindrome(s, left, right) {
        if (left >= right) {
            return true;
        }
        if (s[left] !== s[right]) {
            return false;
        }
        return checkPalindrome(s, left + 1, right - 1);
    }

    return checkPalindrome(cleanedStr, 0, cleanedStr.length - 1);
}

console.log(isPalindrome("A man a plan a canal Panama")); 
console.log(isPalindrome("hello"));
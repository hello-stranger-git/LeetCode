var longestPalindrome = function(s) {
    if(s.length<2)return s
    let maxLength = 1
    let start = 0
    function check(left,right){
        while(left>=0&&right<s.length&&s[left]===s[right]){
            start = right-left+1>maxLength?left:start
            maxLength = right-left+1>maxLength?right-left+1:maxLength
            left--
            right++
        }
    }
    for(let i = 0;i<s.length;i++){
        check(i-1,i+1)
        check(i,i+1)
    }
    return s.substring(start,start+maxLength)
};

let result = longestPalindrome("0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000")
console.log(result)
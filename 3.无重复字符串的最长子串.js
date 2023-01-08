function lengthOfLongestSubstring(s){
    if(!s.length || typeof s !== 'string') return 0
    let result = 0
    let array = []
    for(let i = 0;i < s.length;i++){
        let item = s[i]
        if(array.includes(item)) {
            while(array.includes(item)){
                array.shift()
            }
        }
        array.push(item)
        result = Math.max(array.length,result)
    }
    return result
}
let result = lengthOfLongestSubstring("bbbbb")
console.log(result)
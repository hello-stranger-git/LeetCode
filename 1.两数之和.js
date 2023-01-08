function twoIndex(nums, target) {
    if(!nums.length || !Array.isArray(nums)) return []
    let map = new Map()
    let result = []
    for(let i = 0;i<nums.length;i++){
        let item = nums[i]
        if(!map.has(target - item)){
            map.set(item,i)
        }else{
            result.push(map.get(target - item))
            result.push(i)
            break
        }
    }
    return result
}
let result = twoIndex([2, 7, 11, 15], 9)
console.log(result)


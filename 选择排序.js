function xuanze(arr){
    for(let i = 0;i<arr.length-1;i++){
        let min = i
        for(let j = i+1;j<arr.length;j++){
            if(arr[min]>arr[j]){
                min = j
            }
        }
        [arr[i],arr[min]] = [arr[min],arr[i]]
    }
    return arr
}
console.log(xuanze([5, 4, 6, 3, 8, 1, 7, 2, 10, 9]))
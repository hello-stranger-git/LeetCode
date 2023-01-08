var isValid = function(s){
    let stack = []
    for(let i = 0;i<s.length;i++){
        let ele=s[i]
        if(i===0){
            if(ele===')'||ele===']'||ele==='}'){
                return false
            }else{
                stack.push(ele)
            }
        }else if(ele===')'||ele===']'||ele==='}'){
            let current = stack.pop()
            if(current==='('&&ele===')'){
                continue   
            }if(current==='['&&ele===']'){
                continue   
            }if(current==='{'&&ele==='}'){
                continue   
            }else{
                return false
            }
        }else{
            stack.push(ele)
        }
    }
    if(stack.length===0){
        return true
    }else{
        return false
    }
}
isValid('()[]{}')
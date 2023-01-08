import { ListNode } from "./dataType";
function addTwoNumbers(l1,l2){
    if(!l1 && !l2) return null
    let node = new ListNode()
    let current = node
    let skip = 0
    while(l1 || l2){
        let sum = 0
        if(l1){
            sum += l1.val
            l1 = l1.next
        }
        if(l2){
            sum += l2.val
            l2 = l2.next
        }
        sum += skip
        current.next = new ListNode(sum%10)
        current = current.next
        skip = Math.floor(sum/10)
    }
    if(skip){
        current.next =new ListNode(skip)
    }
    return node.next
}
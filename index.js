function binarySearch(value, list) {
    let low = 0;    //left endpoint 
    let high = list.length - 1;   //right endpoint 
    let position = -1;
    let found = false;
    let mid;
 
    while (found === false && low <= high) {
        mid = Math.floor((low + high)/2);
        if (list[mid] == value) {
            found = true;
            position = mid;
        } else if (list[mid] > value) {  //if in lower half 
            high = mid - 1;
        } else {  //in in upper half 
            low = mid + 1;
        }
    }
    console.log(position);
    return position;
   
}


let arr=[1, 4, 6, 14, 25, 85]
let value=4;
binarySearch(value,arr)
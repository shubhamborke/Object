const problem1 = function keys(object){
    let arr = [];
    for(let key in object){
        arr.push(key);
    }
    console.log(arr);
}

export { problem1 }
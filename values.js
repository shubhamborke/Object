const problem2 = function values(object){
    let arr = [];
    for(let value in object){
        arr.push(object[value]);
    }
    console.log(arr);
}

export { problem2 }
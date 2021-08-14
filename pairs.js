const problem3 = function pairs(object){
    let arr = [];
    for(let key in object){
        arr.push([key, object[key]])
    }
    console.log(arr);
}

export { problem3 }
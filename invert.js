const problem5 = function(obj){
    let newObj = {};
    for(let key in obj){
        [key , newObj[key]] = [obj[key], key];
    }
    console.log(newObj);
}

export { problem5 }
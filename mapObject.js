const problem4 = function(obj, cb){
    for(let key in obj){
        obj[key] = cb(obj[key]);
    }
    console.log(obj);
}

export { problem4 }
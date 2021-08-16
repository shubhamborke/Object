const problem6 = function defauls(obj, defaultProps){
    let newObj = defaultProps;
    for(let key in obj){
        newObj[key] = obj[key];
    }
    console.log(newObj);
}

export { problem6 }
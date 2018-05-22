const jsonToList = (obj) => {
    let result = [];
    for(var i in obj) {
        result.push(obj[i]);
    }
    return result;
};

module.exports = jsonToList;
const fs = require('fs');


// Assign bank accounts to all Korean people.
// First of all, all Koreans shall be listed as users of OP.
// Bank accounts of them are same to their telephone number. 
// TEL => bank account, IPv6 address


let fetchZslList = function() {
    try {
        let zslFile = fs.readFileSync("./json-exercise/zsl-list");
        return JSON.parse(zslFile);
    } catch(e) {
        return [];
    }
}

let saveZslList = function(parsedJson) {
    fs.writeFileSync("./json-exercise/zsl-list", JSON.stringify(parsedJson))
}


let addZsl = function (name, tel) {
    let parsedJson = fetchZslList();

    let zsl = {};

    zsl.name = name;
    zsl.tel = tel;

    //enumeration
    let duplicatedZsls = parsedJson.filter((zsl) => zsl.name === name);

    if (duplicatedZsls.length === 0) {
        parsedJson.push(zsl);
        saveZslList(parsedJson);
    }
}
let removeZsl = function (name) {
    let parsedJson = fetchZslList();


    //enumeration
    let newZslList = parsedJson.filter((zsl) => zsl.name !== name);
    saveZslList(newZslList);

    return newZslList.length === parsedJson.length
    
}
let getZsl = function (name) {
    let parsedJson = fetchZslList();


    //enumeration
    let newZslList = parsedJson.filter((zsl) => zsl.name === name);

    return newZslList[0];
    
}
let listZsl = function () {
    let parsedJson = fetchZslList();
    return parsedJson;
}


// addZsl("Wonderwoman", 821011112222)
// addZsl("Antman", 821011112222)

// console.log(zsls);

module.exports = {
    addZsl,
    removeZsl,
    getZsl,
    listZsl
}



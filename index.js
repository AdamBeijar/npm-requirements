var pjson = require("../package.json")
var fs = require("fs")

const fileName = "npm-requirements.txt"

if(pjson.devDependencies || pjson.dependencies) {
    fs.writeFile(fileName, "npm install ", function (err){
        if(err) throw err
        console.log("Created file")
    })
}

if(pjson.dependencies) {
    const keys = Object.keys(pjson.dependencies)
    keys.forEach(element => {
        fs.appendFile(fileName, element + " ", function (err) {
            if(err) throw (err)
            console.log("Added", element)
        })
    });
}

if(pjson.devDependencies) {
    const keys = Object.keys(pjson.devDependencies)
    keys.forEach(element => {
        fs.appendFile(fileName, element + " ", function (err) {
            if(err) throw (err)
            console.log("Added", element)
        })
    });
}
var path = require("path");
var glob = require("glob");

const ignore = [
    "**/node_modules/**", 
    "**/.git/**", 
    "**/_*.scss"
];

async function findSassFiles(cwd, pattern = "*.scss") {
    return new Promise((resolve, reject) => {
        glob(
            pattern,
            {
                matchBase: true,
                ignore,
                cwd,
                absolute: true
            },
            (error, files) => {
                if (error) {
                    reject(error);
                }
                if (!files.length) {
                    reject(Error("no files found"))
                }
                resolve(files);
            }
        )
    });
}

exports.findSassFiles = findSassFiles;
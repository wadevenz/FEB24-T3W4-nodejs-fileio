let defaultEnv = {
    PORT: 3030,
    SOME_DATABASE_URL: "blah blah blah",
    SECURITY_TOKEN: "token_here",
    SECRET_API_KEY: "secret_api_key",
    JWT_SECRET_KEY: "secret jwt key"
}

console.log(defaultEnv);

let contentToWrite = "";

// ["PORT", "SOME_DATABASE_URL", "SECURITY_TOKEN", etc]
Object.keys(defaultEnv).forEach(envKey => {
    // Add a line to contentToWrite with the key name and key value
    contentToWrite += `${envKey}=${defaultEnv[envKey]}\n`
});

console.log(contentToWrite);

const fs = require("node:fs");

// fs.writeFileSync(".env", contentToWrite);

console.log("Before the fs callback");

// fs.writeFile(filePth, fileContents, callback);
fs.writeFile(".env", contentToWrite, (error) => {
    if (error) {
        console.log("File writing had errors!");
    }else {
        console.log("File has been written!");
    }
    // console.log("writefile has reached the callback");
});

console.log("After the fs callback");
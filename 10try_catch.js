const f = require('fs')


try {
    const data = f.readFileSy(__dirname + "/8hello.txt", "utf-8");
    console.log(data);
} catch (error) {
    console.log(error);

}


console.log("sengar sahab")
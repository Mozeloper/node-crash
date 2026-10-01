// import { readFileSync, readFile } from "fs";

// readFile() - callback

// readFile("./test.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// readFileSync() - Synchronouns version

// const data = readFileSync("./test.txt", "utf-8")
// console.log(data)

import fs from "fs/promises";

// promise .then()

// fs.readFile("./test.txt", "utf-8")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const readFile = async () => {
  try {
    const data = await fs.readFile("./test.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// WriteFile

const writeFile = async () => {
  try {
    await fs.writeFile("./test.txt", "HELLO MOSES IS WRITING");
    console.log("File written too");
  } catch (error) {
    console.log(error);
  }
};

// AppendFile
const appendFile = async () => {
  try {
    await fs.appendFile("./test.txt", "\nHELLO Ojei Appended");
    console.log("File Appened too");
  } catch (error) {
    console.log(error);
  }
};

writeFile();
appendFile();
readFile();

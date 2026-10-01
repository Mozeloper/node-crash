import path from "path";
import url from "url";

const filePath = "./dir1/dir2/test.txt";

// basename()
console.log(path.basename(filePath));
// dirname()
console.log(path.dirname(filePath));
// extname()
console.log(path.extname(filePath));
// parse()
console.log(path.parse(filePath));

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log(__filename, __dirname);

// Join
const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'test.tsx')
console.log(filePath2)

// Resolve
const filePath3 = path.resolve(__dirname, 'dir1', 'dir2', 'test.tsx')
console.log(filePath3)

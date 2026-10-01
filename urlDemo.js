import url from 'url'

const urlString = 'https://www.google.com/search?q=hello+world'

// Url Object 
const urlObj = new URL(urlString)

// console.log(urlObj)

console.log(url.format(urlObj))

// import.meta.url - File Url

console.log(import.meta.url)

// fileURLToPath()

console.log(url.fileURLToPath(import.meta.url))

const params = new URLSearchParams(urlObj.search)

console.log(params)
console.log(params.get('q'))
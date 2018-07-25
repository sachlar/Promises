//https://jsonplaceholder.typicode.com/
const jsonurls = [
  'https://jsonplaceholder.typicode.com/users/',
  'https://jsonplaceholder.typicode.com/comments/',
  'https://jsonplaceholder.typicode.com/albums/',
  'https://jsonplaceholder.typicode.com/photos/',
  'https://jsonplaceholder.typicode.com/todos/',
  'https://jsonplaceholder.typicode.com/users/'
]

Promise.all(jsonurls.map(url => {
  return fetch(url).then(resp => resp.json())
})).then(results => {
  console.log(results[0])
  console.log(results[1])
  console.log(results[2])
}).catch(() => console.log('error'))

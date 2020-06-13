const fetch = require('node-fetch');

async function getBooks(){
  try {
    const res = await fetch('https://restapiabasicauthe-sandbox.mxapps.io/api/books', 
    {
      headers: { 'Authorization': 'Basic YWRtaW46aHZnWDhLbFZFYQ==' }
    });
    const data = await res.json()
    console.log(data)
  }// handle the error 
  catch (error) {
    console.log(error)
  }
}
getBooks();
const fetch = require('node-fetch');

const getNorrisJoke = async () => {
    try {
      const res = await fetch('https://api.icndb.com/jokes/random');
      const data = await res.json();
      console.log(data.value.joke)
    }// handle errors 
    catch (error) {
      console.log(error)
    }
}
  
getNorrisJoke()
const fetch = require('node-fetch');

async function makeReservation(guest){
  try {
    const res = await fetch('https://reservation100-sandbox.mxapps.io/api/reservations', 
    {
      method: 'post',
      // convert the js object using stringify
      body: JSON.stringify(guest),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(res)
  } // handle the error
  catch (error) {
    console.log(error)
  }
}

const guest = {
  name: "Tahe Ahmed",
  numberOfPeople: 10
}

makeReservation(guest)
const express = require('express');
const axios = require('axios');
const API_KEY = require('../sources/keys.json').apiKey;

const router = express.Router()

router.get('/', (req, res) => {
 res.render('index')
});

router.post('/weather', async (req, res) => {
  const cityName = req.body.cityName;
  try {
    //OpenWeather API
    const response = await axios(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
    const data = response.data;
    const weatherText = data.main.temp;
    res.render('success', {
      weatherText,
    })
  } catch (error) {
    const err = {
      status : error.response.status,
      city: ` - ${cityName}`,
      text: error.response.statusText
    }
    res.render('404', { err })
  }

});

module.exports = router;
const axios = require('axios')

export async function handler(event, context, callback) {

  try {
    const res = await axios.get(`https://dietlyprod001front.herokuapp.com/api/company-details/afterfit/data`)
    callback(null, {
      statusCode: 200, // http status code
      body: JSON.stringify(res.data),
    })
  } catch (e) {
    console.log('error', e)
  }

}

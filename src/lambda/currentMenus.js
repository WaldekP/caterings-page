const axios = require('axios')

export async function handler(event, context, callback) {

  try {
    const menus = encodeURIComponent(event.queryStringParameters.menus)

    const res = await axios.get(`https://dietlyprod001front.herokuapp.com/api/company-details/afterfit/menus?searchCriteria=${menus}`)

    callback(null, {
      statusCode: 200, // http status code
      body: JSON.stringify(res.data),
    })
  } catch (e) {
    console.log('error', e)
  }

}

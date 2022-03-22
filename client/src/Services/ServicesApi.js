import axios from 'axios'

const url = 'http://localhost:4000'


export const addProductData = async (data) => {
  try {
    console.log(data)
    await axios.post(`${url}/add/product` , data)
  } catch (error) {
    console.log('error while adigProduct from ServicesApi in client : ' , error)
  }
}
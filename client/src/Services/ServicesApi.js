import axios from 'axios'

const url = 'http://localhost:4000'


export const addProductData = async (data) => {
  try {
    await axios.post(`${url}/add/product` , data)
  } catch (error) {
    console.log('error while adigProduct from ServicesApi in client : ' , error)
  }
}


// export const uploadFile = async (data) => {
//   try {
//     return await axios.post(`${url}/file/upload` , data)
//   } catch (error) {
//     console.log('error while calling uploadFile from services Api' , error)
//   }
// }
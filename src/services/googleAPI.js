import axios from 'axios';

const getDataPay=async()=>{
  try{
    console.log('connecting to API...')
    const response = await axios.request({
        method: 'post',
        url: 'https://geogoogle.herokuapp.com/googlepay'
    })
    return response.data;
  }catch(e){
    throw new Error(e)
  }
}

export {getDataPay}
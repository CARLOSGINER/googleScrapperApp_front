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

// const getDataPay=async()=>{
//   try{
//     console.log('mockup Promise DATA...')
//     const response = await new Promise((resolve,reject)=>{
//       resolve(
//         [
//           {
//             Address: "direccion 1",
//             BusinessName: "burger king",
//             Category: "restaurante",
//             fone: "fone0414",
//             mail: "mail@1",
//             website: "website1.com"
//           },
//           {
//             Address: "direccion 2",
//             BusinessName: "mc donalds",
//             Category: "restaurante",
//             fone: "fone0414",
//             mail: "mail@1",
//             website: "website1.com"
//           },
//           {
//             Address: "direccion 3",
//             BusinessName: "Kentucky Chicken",
//             Category: "restaurante",
//             fone: "fone0414",
//             mail: "mail@1",
//             website: "website1.com"
//           }
//         ]
//       )
//     })
//     return response;
//   }catch(e){
//     throw new Error(e)
//   }
// }

export {getDataPay}
// 'use server'
// const nodemailer = require("nodemailer")

// const sendMail = async(sendto)=>{
//   const transporter =   nodemailer.createTransport({
//         service:'gmail',
//         auth:{
//             user:'aryan.ayush21b@iiitg.ac.in',
//             pass:'pmubohovhcdusnvi'
//         }
//     })
//     const mailOptions={
//         from:'aryan.ayush21b@iiitg.ac.in',
//         to: sendto,
//         subject: "Shop Wisely using Shopwisely",
//         text: "Your order price is reduced ! Shop now"
//     }

//     try {
//         const sent = transporter.sendMail(mailOptions)
//         console.log("sent");
//     } catch (error) {
//         console.log(error);
//     }

// }
// export default sendMail
// import compression from 'compression'
// import express from 'express'
// import helmet from 'helmet'
// import morgan from 'morgan'

// const app = express()

// // Init middleware
// app.use(morgan('dev')) // Format console log response
// app.use(helmet()) // Bảo vệ header request (tránh cho các hacker có thể lấy được thông tin module chúng ta đang sử dụng)
// app.use(compression()) // Nén dữ liệu gửi đi

// // Init database

// // Init route

// // Handle error

// // Start server
// const server = app.listen(3055, () => {
//   console.log(`WSV eCommerce start with port ${3055}`)
// })

// // Phương thức quy trình trong nodejs
// process.on('SIGINT', () => {
//   server.close(() => console.log(`Exit server express`))
// })

const handleImageUpload = async () => {
  console.log('Hello world 123!')
}

handleImageUpload()

export default {
  add: (a: number, b: number): number => {
    return a + b
  },
  subtract: (a: number, b: number): number => {
    return a - b
  }
}

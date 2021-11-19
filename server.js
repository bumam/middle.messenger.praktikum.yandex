const express = require('express');

const app = express();
const host = 'localhost'
const port = 3000;


app.use(express.static(`${__dirname}/dist`));

// app.get('/', (req, res) => {
//   res.render('index')
// })

// app.get('/enter', (req, res) => {
//   res.render('login')
// })

// app.get('/signin', (req, res) => {
//   res.render('registration')
// })

// app.get('/profile1', (req, res) => {
//   res.render('user-profile', {
//     data: 'full',
//     state: 'basic',
//   })
// })

// app.get('/profile2', (req, res) => {
//   res.render('user-profile', {
//     data: 'full',
//     state: 'save',
//   })
// })
// app.get('/profile3', (req, res) => {
//   res.render('user-profile', {
//     data: 'password',
//     state: 'save',
//   })
// })
// app.get('/profile4', (req, res) => {
//   res.render('user-profile', {
//     data: 'full',
//     state: 'basic',
//     loadingAvatar: true
//   })
// })

// app.get('/chats1', (req, res) => {
//   res.render('chats')
// })

// app.get('/chats2', (req, res) => {
//   res.render('chats')
// })

// app.get('/chats3', (req, res) => {
//   res.render('chats')
// })

// app.get('/chats4', (req, res) => {
//   res.render('chats')
// })

// app.get('/404', (req, res) => {
//   res.render('fail', {errors:[
//     {code: 404, text: 'Не туда попали'}]})
// })

// app.get('/500', (req, res) => {
//   res.render('fail', {errors:[
//     {code: 500, text: 'Мы уже фиксим'}]})
// })


app.listen(port, host, function () {
  console.log(`Server listens http://${host}:${port}`)
})


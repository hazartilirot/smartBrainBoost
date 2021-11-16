const express = require('express');
require('dotenv').config();
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');
const auth = require('./controllers/authorization');

const connection = {
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    port : process.env.DB_PORT,
    password : process.env.DB_PASS,
    database : 'smart-brain'
}

const db = knex({ client: 'pg', connection });

const app = express();

app.use(cors())
app.use(express.json());

app.post('/signin', signin.signinAuthentication(db, bcrypt))
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
app.get('/profile/:id', auth.requireAuth, (req, res) => { profile.handleProfileGet(req, res, db)})
app.post('/profile/:id', auth.requireAuth, (req, res) => { profile.handleProfileUpdate(req, res, db)})
app.put('/image', auth.requireAuth, (req, res) => { image.handleImage(req, res, db)})
app.post('/imageurl', auth.requireAuth, (req, res) => { image.handleApiCall(req, res)})

const PORT = process.env.BE_SERVER_PORT ?? 5000

app.listen(PORT, ()=> {
  console.log(`app is running on port ${PORT}`);
})

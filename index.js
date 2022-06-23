const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const config = require('./config/dev');
const { User } = require('./models/User');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected..')).catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!~')
})

app.post('/register', (req, res) => {
    const user = new User(req.body)

    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err })
        return res.status(200).json({
            success: true
        })
    })
})

app.post('/login', (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if(!user) {
            return res.json({
                loginSuccess: false,
                message: "해당 이메일 유저 없음"
            })
        }

        user.comparePassword(req.body.password , (err, isMatch ) => {
            if(!isMatch)
                return res.json({ loginSuccess: false, message: "password err" })

        })
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
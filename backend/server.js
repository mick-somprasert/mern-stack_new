const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');
require('dotenv').config();

const mongoose = require('mongoose');
mongoose
    .connect(process.env.DATABASE_CLOUD, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
    .then(() => console.log('DB Connected'))
    .catch(err => {
        console.log(err);
    });

//app
const app = express();


//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('public')); //to access the files in public folder
app.use(fileUpload());

//bring routes
const userRoutes = require('./routes/user');
const usersRoutes = require('./routes/users');
const productRoutes = require('./routes/product');
const categoryRoutes = require('./routes/category');
const uploadfileRoutes = require('./routes/uploadfile');
//const tutorialRoutes = require('./routes/');
//const blogRoutes = require('./routes/blog');
//const authRoutes = require('./routes/auth'); 


//cors
if (process.env.NODE_ENV === 'development') {
    app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

//routes midlleware
app.use('/api', userRoutes);
app.use('/api', usersRoutes);
app.use('/api', productRoutes);
app.use('/api', categoryRoutes);
app.use('/api', uploadfileRoutes);
//app.use('/api', blogRoutes);
//app.use('/api', authRoutes);


//port
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server runing on `);
    console.log(`http://localhost:${port}`);
});
const express = require('express');
const app   = express();
const cookieSession = require("cookie-session");
app.use(express.static("public"));
const userRoute = require("./routes/user");
const googleSetup = require("./utils/googlepassport");
const passport = require('passport');

// console.log(userRoutes); 

app.use(cookieSession({
    maxAge : 24*60*60*1000,
    keys : ['thisisasecretkey']
}));




app.use(passport.initialize());
app.use(passport.session());
app.set('view engine' , 'ejs' );
app.use('/' , userRoute);
app.listen(process.env.PORT || 3000 , ()=>{
    console.log("Server start");
})

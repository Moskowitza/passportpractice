1_ Build Node server to get everything set up before migrating to React
make folder, set github
npm init

install passport local


http://mherman.org/blog/2015/01/31/local-authentication-with-passport-and-express-4/

you need an express session to run once logged in
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
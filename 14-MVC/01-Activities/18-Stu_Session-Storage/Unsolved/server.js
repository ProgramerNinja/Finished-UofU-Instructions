const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
// Initializes Sequelize with session store
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const { strict } = require('assert');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up session and connect to our Sequelize db
const sess = {
  secret: 'Super secret secret',
  // TODO: Add a comment describing the purpose of adding a cookies object to our options to our session object
  // adds an object that is locally stored on the clients machine that can be accessed by the server
  cookie: {
    // TODO: Add a comment describing the functionality of the maxAge attribute
    // adds an age limit to the cookie
    maxAge: 60 * 60 * 1000,
    // TODO: Add a comment describing the functionality of the httpOnly attribute
    //tels express session to only store session cookies when http is used to connect to the server
    httpOnly: true,
    // TODO: Add a comment describing the functionality of the secure attribute
    // tell express session to initialize cookies only when the call is from a secure site: https
    secure: false,
    // TODO: Add a comment describing the functionality of the sameSite attribute
    // cookie will not be sent to the server unless the address is the exact same.
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  // Sets up session store 
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
    )
  );
});

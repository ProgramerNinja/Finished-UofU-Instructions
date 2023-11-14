const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');

// TODO: Add comments describing the functionality of this `login` route
//assigns post route for /login
router.post('/login', async (req, res) => {
  //sets up try
  try {
    //awaits data from pull, looking specifically for email that matches one in db
    const userData = await User.findOne({ where: { email: req.body.email } });
    //if there is a null value, return error 404
    if (!userData) {
      res.status(404).json({ message: 'Login failed. Please try again!' });
      return;
    }
//if userData is not null, uncrypt password on file and compare to password given
    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    //if the password given is not the same as the uncrypted password, return error 400
    if (!validPassword) {
      res.status(400).json({ message: 'Login failed. Please try again!' });
      return;
    }
    //if email is good and the password matches, return 200 and continue
    res.status(200).json({ message: 'You are now logged in!' });
    //oh crap, sumthin went wrong in our route
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

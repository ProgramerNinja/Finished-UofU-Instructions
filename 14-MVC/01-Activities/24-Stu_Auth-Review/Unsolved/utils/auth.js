const withAuth = (req, res, next) => {
  // TODO: Add a comment describing the functionality of this if statement
  // checks wether the session variable logged_in is true or false. true continues and false redirects to the login page
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;

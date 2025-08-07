const viewController = {
  signUp(req, res, next) {
    res.render('auth/SignUp')
  },
  signIn(req, res, next) {
    res.render('auth/SignIn')
  },
  redirectToLogin(req, res, next) {
    res.redirect('/users/login')
  }
}

module.exports = viewController
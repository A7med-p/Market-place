const RESOURCE_PATH = '/items'
const viewController = {
  signUp(req, res, next){
    res.render('/auth/SignUp')
  },
  signIn(req, res, next){
    res.render('/auth/SignIn')
  },
  index(req, res, next){
    res.render('items/Index', res.locals.data)
  },
  show(req, res, next){
    res.render('items/Show', res.locals.data)
  },
  edit(req, res, next){
    res.render('items/Edit', res.locals.data)
  },
  newView(req, res, next){
    res.render('items/New', res.locals.data)
  },
  home(req, res, next){
    res.render('items/Home', res.locals.data)
  },
  buy(req, res, next){
    res.render('items/Buy', res.locals.data)
  },
  redirectHome(req, res, next){
    if(res.locals.data.token){
      res.redirect(`${RESOURCE_PATH}?token=${res.locals.data.token}`)
    }else {
      res.redirect(RESOURCE_PATH)
    } 
  },
  redirectShow(req, res, next){
     if(res.locals.data.token){
      res.redirect(`${RESOURCE_PATH}/${req.params.id}?token=${res.locals.data.token}`)
    }else {
      res.redirect(`${RESOURCE_PATH}/${req.params.id}`)
    } 
  }
}

module.exports = viewController
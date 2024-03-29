exports.get404 = (req, res, next) => {
    res.status(404).render('404', 
    {
    pageTitle: 'Page Not Found',
    isAuthenticated: req.session.isLoggedIn,
    path: '/404'
});
};

exports.get500 = (req, res, next) => {
    res.status(500).render('500', 
    {
    pageTitle: 'Internal Server Error',
    isAuthenticated: req.session.isLoggedIn,
    path: '/500'
});
};
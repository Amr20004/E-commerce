const User = require('../models/user');

module.exports.registerForm = (req, res) => {
    res.render('pages/registerPage');
}

module.exports.createNewUser = async (req, res, next) => {
    try {
        const { username, email, password, confirmPassword } = req.body;
        if (password !== confirmPassword) {
            req.flash('error', 'password wrong!!');
            res.redirect('/register');
        }
        let newUser = new User({ username, email });
        let registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (error) => {
            if (error) {
                return next(error);
            }
            req.flash("success", `welcome ${username} to e-commerce app`);
            res.redirect('/test');
        })
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/register");
    }
}
import passport from 'passport';
import setupLocalStrategy from './strategies/local.strategy';

export default (app) => {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });

    setupLocalStrategy();
};

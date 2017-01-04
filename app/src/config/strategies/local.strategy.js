import passport from 'passport';
import {Strategy as LocalStrategy} from 'passport-local';
import {MongoClient} from 'mongodb';

export default () => {
    passport.use( new LocalStrategy({
        usernameField: 'userName',
        passwordField: 'password',
    },
    (username, password, done) => {
        let url = 'mongodb://localhost:27017/library-app';

        MongoClient.connect(url, (err, db) => {
            let collection = db.collection('users');
            collection.findOne({
                username: username,
            },
                (err, results) => {
                    if (results.password === password) {
                        let user = results;
                        done(null, user);
                    } else {
                        done(null, false, {message: 'Bad password'});
                    }
                }
            );
        });
    }));
};

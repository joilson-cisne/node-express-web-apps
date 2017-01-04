import express from 'express';
import passport from 'passport';
import {
    MongoClient,
} from 'mongodb';

const router = new express.Router();

export default () => {
    router.route('/signUp')
        .post((req, res) => {
            console.log(req.body);
            const url = 'mongodb://localhost:27017/library-app';

            MongoClient.connect(url, (err, db) => {
                let collection = db.collection('users');
                let user = {
                    username: req.body.userName,
                    password: req.body.password,
                };

                collection.insert(user, (err, results) => {
                    req.login(results.ops[0], () => {
                        res.redirect('/auth/profile');
                    });
                });
            });
        });

    router.route('/signIn')
        .post(passport.authenticate('local', {
            failureRedirect: '/',
        }), (req, res) => {
            res.redirect('/auth/profile');
        });

    router.route('/profile')
        .all((req, res, next) => {
            if (!req.user) {
                res.redirect('/');
            }
            next();
        })
        .get((req, res) => {
            res.json(req.user);
        });

    return router;
};

import express from 'express';
import {
    MongoClient,
} from 'mongodb';

const router = new express.Router();

export default () => {
    router.route('/signUp')
        .post((req, res) => {
            console.log(req.body);
        });
};

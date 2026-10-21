import express from 'express'
import { getTweets, getTweetById, createTweet } from '../../Controllers/tweetControllers.js';

const router = express.Router();

router.get('/', getTweets);

router.get('/:id',getTweetById );

router.post('/', createTweet);

export default router;
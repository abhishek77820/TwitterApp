import express from 'express'

const router = express.Router();

router.get('/', (req, res) => {
    return res.json({
        message: "Welcome to the tweet routes 2",

    });
});

router.get('/:id', (req, res) => {
    return res.json({
        message: "Welcome to the tweet routes 2",
        id: req.params.id
    });
});

export default router;
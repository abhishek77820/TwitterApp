export const getTweets= (req, res) => {
    return res.json({
        message: "Welcome to the tweet routes"

    });
}


export const getTweetById= (req, res) => {
    return res.json({
        message: "Welcome to the tweet routes",
        id: req.params.id
    });
}


export const createTweet = (req, res)=> {
    return res.json({
        message: "Your Tweet creted",
        body:req.body
    });
}
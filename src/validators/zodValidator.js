
export const validate = (schema) => {
    // it return validating middleware
    return async (req, res, next) => {
        try {
            console.log(req.body);
            schema.parse(req.body);
            next();
        } catch (error) {
            
            return res.status(400).json({
                
                error: error.flatten(),
                success: false,
                message: "validation failed"
            });
        }
    }
}
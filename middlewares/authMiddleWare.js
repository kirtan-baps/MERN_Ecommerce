import JWT from 'jsonwebtoken';
import userModel from '../models/userModel.js';

const requireSignIn = async (req, res, next) => {
    try {
        const decode = JWT.verify(
            req.headers.authorization,
            process.env.JWT_SECRET_KEY
        );

        /* `req.user = decode;` is assigning the decoded JWT payload to the `user` property of the
        `req` object. This allows the user information to be accessed in subsequent middleware or
        route handlers. */

        // console.log(decode);
        req.user = decode;
        next();
    } catch (error) {
        console.log(error);
    }
}

const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id);

        if (user.role !== 1) {
            return res.status(403).send({
                success: false,
                message: "Unauthorized Access"
            });
        }


        next();
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success: false,
            message: 'Error in Admin Middleware',
            error
        })
    }
}

export { requireSignIn, isAdmin }
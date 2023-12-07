import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from 'jsonwebtoken';

const registerController = async (req, res) => {
    try {
        // console.log('register');
        const { name, email, phone, address, password } = req.body;


        // Validation
        if (!name) {
            return res.send({ message: 'Name is Required' })
        }
        if (!email) {
            return res.send({ message: 'email is Required' })
        }
        if (!phone) {
            return res.send({ message: 'phone is Required' })
        }
        if (!address) {
            return res.send({ message: 'address is Required' })
        }
        if (!password) {
            return res.send({ message: 'password is Required' })
        }

        // check User
        const existingUser = await userModel.findOne({ email })
        // Existing User
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: "Already Register please login",
            })
        }
        // create new user
        const hashedPassword = await hashPassword(password);
        // save 
        const user = new userModel({ name, email, phone, address, password: hashedPassword });
        await user.save();
        res.status(201).send({
            success: true,
            message: 'User Registered Successfully',
            user
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Registration',
            error
        })
    }
}

const loginController = async (req, res) => {
    try {
        // console.log('Login');
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.send({ error: 'Invalid Email or Password' })
        }


        // check User
        const user = await userModel.findOne({ email })
        // Not Existing User
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'Email is not Registered',
            })
        }

        const match = await comparePassword(password, user.password)
        if (!match) {
            return res.status(200).send({
                success: false,
                message: 'Invalid Password',
            })
        }


        const token = await JWT.sign(
            { _id: user._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '7d' }
        );

        res.status(202).send({
            success: true,
            message: 'Login Successfully',
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
            },
            token
        })



        // // save 
        // const user = new userModel({ name, email, phone, address, password: hashedPassword });
        // await user.save();

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Login',
            error
        })
    }
}


const testController = (req, res) => {
    res.status(500).send('Protected Route')
}


export { registerController, loginController, testController }
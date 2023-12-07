import bcrypt from 'bcrypt'


const hashPassword = async (password) => {
    try {
        // This will consume more CPU usage
        // const saltRounds = 10;
        const saltRounds = 2;

        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        console.log(error);
    }
}
const comparePassword = async (password, hashedPassword) => {
    try {
        return bcrypt.compare(password, hashedPassword);
    } catch (error) {
        console.log(error);
    }
}

export { hashPassword, comparePassword };
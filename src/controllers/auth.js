import userModel from '../models/user.js';
import {authenticate as authService} from '../services/auth.js';

const authenticate = (req, res) => {

    try {
        const user  = userModel(req.params);
        const token = authService(user);

        return res.status(200).json({token: token});
    } catch (error) {
        return res.status(error.status || 500).json({ message: error.message || 'Internal Error' });
    }
}

export default authenticate;
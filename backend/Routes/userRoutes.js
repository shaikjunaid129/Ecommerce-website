import express from 'express';
import User from '../models/userModel.js';
import { tokenGenerate } from '../utils.js';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';

const userRouter = express.Router();

userRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password))
          res.send({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: tokenGenerate(user),
          });
        return;
      }
    }
    res.status(401).send({ message: ' Invalid email or Password' });
  })
);

userRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
    });
    const user = await newUser.save();
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: tokenGenerate(user),
    });
  })
);
export default userRouter;

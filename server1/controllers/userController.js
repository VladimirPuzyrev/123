const User = require('../models/Users.js');

module.exports.getAllUsers = async (req, res, next) => {
    try {
      const users = await User.find({ _id: { $ne: req.params.id } }).select([
        "email",
        "username",
        "avatar",
        "_id",
      ]);
      return res.json(users);
    } catch (ex) {
      next(ex);
    }
  };

module.exports.setAvatar = async (req, res, next) => {
    try {
    const userId = req.params.id;
    const avatar = req.body.image;
    const userData = await User.findByIdAndUpdate(
        userId,
        {
        avatar
        },
        { new: true }
    );
    return res.json({
        image: userData.avatar,
    });
    } catch (ex) {
    next(ex);
    }
};
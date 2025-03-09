const Motivator = require('../models/motivator');

exports.getMotivators = async (req, res) => {
    const motivators = await Motivator.find();
    res.json(motivators);
};

exports.addMotivator = async (req, res) => {
    const { message, author } = req.body;
    const newMotivator = new Motivator({ message, author });
    await newMotivator.save();
    res.json(newMotivator);
};


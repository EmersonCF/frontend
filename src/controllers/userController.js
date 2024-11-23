const getUsers = (req, res) => {
    res.json([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' }
    ]);
};

const createUser = (req, res) => {
    const { name } = req.body;
    res.status(201).json({ id: Date.now(), name });
};

module.exports = { getUsers, createUser };


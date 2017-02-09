const { User } = require('../model/postgresDB');

const userController = {};

  
userController.addUser = (req, res) => {
  const { 
    username,
    password, 
    email 
  } = req.body;

  if (!username || !password || !email) return res.status(400).json({ err: 'Please supply a valid username, password, and email' }); 

  User.create({ username, password, email })
   .then(() => res.end())
   .catch(err => res.status(500).json({ err }));

};

userController.loginUser = (req, res) => {
  const { 
    username,
    password, 
    email 
  } = req.body;

  if (!username || !password) return res.status(400).json({ err: 'Please supply a valid username and password' }); 

  User.findOne({where: {username, password }})
    .then(userExists => userExists ? res.end() : res.sendStatus(400).end()) 
    .catch(() => res.sendStatus(400));

}

userController.removeUser = (req, res) => {
  const { 
    username,
    password, 
    email 
  } = req.body;

 User.destroy({ where : { username, password }})
  .then(() => res.sendStatus(201))
  .catch(() => res.sendStatus(404));

}

userController.updateUser = (req, res) => {
  const { 
    username,
    password, 
    email 
  } = req.body;

	User.update({ password: newpassword },{ username, password })
   .then(() => res.sendStatus(200))
   .catch(() => res.sendStatus(404));

}


module.exports = userController;

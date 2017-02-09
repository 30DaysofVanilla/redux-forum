const { Message } = require('../model/postgresDB');

const messageController = {};
 
messageController.addMessage = (req, res) => {
  const { 
    author,
    messageBody, 
  } = req.body;

  if (!author || !messageBody) return res.status(400).json({ err: 'Please supply a valid author and message.' }); 

  Message.create({ author, messageBody })
   .then(() => res.end())
   .catch(err => res.status(500).json({ err }));

};

messageController.loginUser = (req, res) => {
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

messageController.removeUser = (req, res) => {
  const { 
    username,
    password, 
    email 
  } = req.body;

 User.destroy({ where : { username, password }})
  .then(() => res.sendStatus(201))
  .catch(() => res.sendStatus(404));

}

messageController.updateUser = (req, res) => {
  const { 
    username,
    password, 
    email 
  } = req.body;

	User.update({ password: newpassword },{ username, password })
   .then(() => res.sendStatus(200))
   .catch(() => res.sendStatus(404));

}


module.exports = messageController;

'use strict';

const Sequelize = require('sequelize');
//const REMOTE_URL = require('../database.js');
const LOCAL_URL = 'postgres://localhost:5432/reduxmessage';

const sequelize = new Sequelize(LOCAL_URL);

const validateEmail = () => (/\S+@\S+\.\S+/).test(email);

//check connection
sequelize
  .authenticate()
  .then( function(err) {
    console.log('Connection Successful')
  })
  .catch( function(err) {
    console.log('Unable to connect::::', err)
  });

//Model for User
const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  }, 
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  }
})

const Message  = sequelize.define('message', {
  author: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  }, 
  messageBody: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
})

sequelize.sync( {} )
  .catch( (error) => {
    console.log(error)
  })


module.exports = {sequelize, User, Message };

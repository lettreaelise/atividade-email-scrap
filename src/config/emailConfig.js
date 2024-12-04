require('dotenv').config();

module.exports = {
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Seu email (Ex: fds23oficial@gmail.com)
    pass: process.env.EMAIL_PASSWORD, // Senha de aplicativo ou senha normal
  },
};

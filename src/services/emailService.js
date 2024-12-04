const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async (data) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    
    let htmlContent = `
      <h1>Eletrônicos na Amazon</h1>
      <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse;">
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Avaliação</th>
          </tr>
        </thead>
        <tbody>
    `;

    
    data.forEach(item => {
      htmlContent += `
        <tr>
          <td>${item.title}</td>
          <td>${item.price}</td>
          <td>${item.rating}</td>
        </tr>
      `;
    });

    htmlContent += `
        </tbody>
      </table>
    `;

    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'Dados do Scraper',
      html: htmlContent,
    };

    
    await transporter.sendMail(mailOptions);
    console.log('E-mail enviado com sucesso!');
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error.message);
    throw error;
  }
};

module.exports = { sendEmail };

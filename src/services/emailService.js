const nodemailer = require('nodemailer');
require('dotenv').config(); // Certifique-se de que o dotenv está sendo carregado

const sendEmail = async (data) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Seu e-mail
        pass: process.env.EMAIL_PASS, // Sua senha de app
      },
    });

    // Criação do corpo do e-mail com a tabela HTML
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

    // Preenchendo a tabela com os dados obtidos do scraping
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

    // Definindo as opções do e-mail
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Envia para o mesmo e-mail
      subject: 'Dados do Scraper',
      html: htmlContent, // Corpo do e-mail em HTML
    };

    // Enviar o e-mail
    await transporter.sendMail(mailOptions);
    console.log('E-mail enviado com sucesso!');
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error.message);
    throw error; // Lança o erro para ser capturado na função principal
  }
};

module.exports = { sendEmail };

const { scrapeData } = require('../services/scraperService');
const { sendEmail } = require('../services/emailService');

// Função para controlar o fluxo de scraping e envio de email
const mainController = async () => {
  const url = 'https://www.amazon.com.br/s?k=eletrônicos'; // URL para scraping
  
  try {
    const data = await scrapeData(url); // Coleta os dados do site
    await sendEmail(data); // Envia os dados por e-mail
    console.log('Email enviado com sucesso!');
  } catch (error) {
    console.error('Erro no processo:', error.message);
  }
};

module.exports = { mainController };

const { scrapeData } = require('../services/scraperService');
const { sendEmail } = require('../services/emailService');


const mainController = async () => {
  const url = 'https://www.amazon.com.br/s?k=eletrônicos';
  
  try {
    const data = await scrapeData(url);
    await sendEmail(data);
    console.log('Email enviado com sucesso!');
  } catch (error) {
    console.error('Erro no processo:', error.message);
  }
};

module.exports = { mainController };

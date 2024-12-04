const { scrapeData } = require('./services/scraperService');
const { sendEmail } = require('./services/emailService');

const main = async () => {
  const url = 'https://www.amazon.com.br/s?k=eletrônicos'; // URL de exemplo
  
  try {
    const data = await scrapeData(url); // Coleta os dados
    await sendEmail(data); // Envia os dados por e-mail
    console.log('Email enviado com sucesso!');
  } catch (error) {
    console.error('Erro no processo:', error.message);
  }
};

main(); // Chama a função principal

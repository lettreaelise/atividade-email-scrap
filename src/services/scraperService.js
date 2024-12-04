const axios = require('axios');
const cheerio = require('cheerio');

// Função para fazer o scraping da Amazon com axios
const scrapeData = async (url) => {
  try {
    // Definir um User-Agent para simular um navegador normal
    const { data } = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    });

    const $ = cheerio.load(data); // Carregar a página com cheerio

    const scraperData = [];

    // Extração de dados simples: Títulos de produtos e preços
    $('div.s-main-slot div.s-result-item').each((index, element) => {
      const title = $(element).find('h2 span').text(); // Título do produto
      const price = $(element).find('.a-price .a-offscreen').text(); // Preço do produto
      const rating = $(element).find('.a-icon-alt').text(); // Avaliação

      if (title && price) {
        scraperData.push({
          title,
          price,
          rating: rating || 'Sem avaliação', // Caso não tenha avaliação
        });
      }
    });

    return scraperData; // Retorna os dados coletados
  } catch (error) {
    console.error('Erro ao fazer o scraping:', error.message);
    throw error; // Retorna o erro caso ocorra
  }
};

module.exports = { scrapeData };

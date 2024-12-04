const axios = require('axios');
const cheerio = require('cheerio');


const scrapeData = async (url) => {
  try {
    
    const { data } = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    });

    const $ = cheerio.load(data);

    const scraperData = [];

    
    $('div.s-main-slot div.s-result-item').each((index, element) => {
      const title = $(element).find('h2 span').text();
      const price = $(element).find('.a-price .a-offscreen').text();
      const rating = $(element).find('.a-icon-alt').text();

      if (title && price) {
        scraperData.push({
          title,
          price,
          rating: rating || 'Sem avaliação',
        });
      }
    });

    return scraperData;
  } catch (error) {
    console.error('Erro ao fazer o scraping:', error.message);
    throw error;
  }
};

module.exports = { scrapeData };

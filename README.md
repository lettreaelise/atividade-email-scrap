Scraping Backend com Envio de E-mail
Este é um projeto backend simples para realizar scraping de dados de um site e enviar as informações coletadas por e-mail.

Tecnologias Usadas
Node.js: Ambiente de execução JavaScript no servidor.
Axios: Biblioteca para fazer requisições HTTP.
Cheerio: Biblioteca para parsing HTML e scraping de dados.
Nodemailer: Biblioteca para envio de e-mails com Node.js.
Dotenv: Biblioteca para carregar variáveis de ambiente a partir de um arquivo .env.
Funcionalidades
Realiza scraping de dados de produtos da Amazon.
Coleta informações como título, preço e avaliação dos produtos.
Formata os dados em uma tabela HTML e envia por e-mail.

Como Rodar o Projeto
1. Clonar o Repositório
Primeiro, clone o repositório para sua máquina local:

git clone https://github.com/seu-usuario/scraper-email.git
cd scraper-email

2. Instalar Dependências
Instale as dependências necessárias:

npm install

3. Configuração de Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto com as seguintes variáveis de ambiente:

EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-app

EMAIL_USER: Seu endereço de e-mail (o que será usado para enviar os dados).
EMAIL_PASS: Sua senha de aplicativo gerada para o Gmail (não use sua senha normal, siga as instruções para gerar uma senha de aplicativo).

Rodar o Projeto
Após configurar as variáveis de ambiente, você pode rodar o projeto com o seguinte comando:

node src/app.js

Isso fará com que o script acesse o site da Amazon, faça o scraping dos dados e envie as informações para o e-mail configurado.
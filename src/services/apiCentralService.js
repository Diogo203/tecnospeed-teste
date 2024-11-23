const axios = require('axios');
const logger = require('../utils/logger');

/**
 * Envia requisições para a API Central.
 * @param {string} apiLink - URL da API que será acessada.
 * @param {string} cnpj - CNPJ da empresa que está fazendo a requisição.
 * @param {string} token - Token de autenticação no formato Bearer.
 * @param {object} body - Dados do corpo da requisição (conta e banco).
 * @returns {object} - Resposta da API Central.
 */
async function acessarApiCentral(apiLink, cnpj, token, body) {
  try {
    // Configuração dos headers
    const headers = {
      Link: apiLink,
      CNPJ: cnpj,
      Authorization: `Bearer ${token}`,
    };

    // Enviando a requisição POST
    const response = await axios.post(apiLink, body, { headers });
    return response.data; // Retorna a resposta da API central
  } catch (error) {
    // Log de erros em caso de falha
    logger.error(`Erro ao acessar API Central: ${error.message}`);
    throw new Error(error.response?.data?.message || 'Erro ao acessar a API Central');
  }
}

module.exports = { acessarApiCentral };

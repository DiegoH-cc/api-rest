import mysql from 'mysql2'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Diego',
    database: 'bdcopa'
})
/**
 * Executa um código sql com ou sem valores
 * @param {string} sql instrução sql a ser executado 
 * @param {string=id / [selecao, id]} valores a serem passados para o sql
 * @param {string} mensagemReject mensagem a ser exibida 
 * @returns objeto da Promisse
 */
export const consulta = (sql, valores='', mensagemReject) => {
    return new Promise((resolve, reject)=> {
        conexao.query(sql, valores, (erro, resultado)=> { 
            if(erro) return reject(mensagemReject)
                // fazer os parses do resultado
                const row = JSON.parse(JSON.stringify(resultado))
                return resolve(row)
        })
    })
}

conexao.connect()

export default conexao
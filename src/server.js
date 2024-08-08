import app from "./app.js"


const PORT = process.env.PORT || 3000

// fazer a conexão do Banco de Dados
app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
})



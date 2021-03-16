module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Você esta na rota de atendimentos, realizando um GET'))

    app.post('/atendimentos', (req, res) => res.send('Você esta na rota de atendimentos, realizando um POST'))
}
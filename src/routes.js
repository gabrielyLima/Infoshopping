
module.exports = (app) => ({
    setup: () =>{

        app.get('/aaa', (req, res) => {res.send('<h1>AAAAA</h1>x')})


    }
});
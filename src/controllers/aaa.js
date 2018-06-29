module.exports = {
    printar: (req, res) => {
        res.send(`<h1>n: ${req.params.n}</h1>`);
    }
}
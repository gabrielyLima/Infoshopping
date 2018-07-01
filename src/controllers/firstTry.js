module.exports = {
    print: (req, res) => {
        res.send(`<h1>${req.params.n}</h1>`);
    }
}
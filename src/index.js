import app from './app';


const port = process.env.PORT || 3001;

app.use(function (req, res) {
    let url = req.url;

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write('<h1>Enlace Funcionando</h1>');
    res.end();
}).listen(port, () => {
    console.log('listening on %s', port);
});
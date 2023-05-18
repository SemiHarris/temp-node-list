const http =require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.end('Hello to our home page')
    }
    if(req.url === '/about') {
        res.end('This is the "about" page')
    }
    res.end (`
    <h1>Oops!<h1>
    <p>We can't seem to find the page
    <a href="/">back home</a>
    `)
    
})

server.listen(5000)
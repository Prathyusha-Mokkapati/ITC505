const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.get('/setCookie', (req, res) => {
    res.cookie('user', JSON.stringify({name: 'John Doe', email: 'john@example.com'}));
    res.send('Cookie has been set');
});

app.get('/getCookie', (req, res) => {
    const user = req.cookies.user ? JSON.parse(req.cookies.user) : 'No user cookie found';
    res.json(user);
});

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});

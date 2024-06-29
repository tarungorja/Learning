import express from 'express';

const app = express();

// app.get('route',request_handler_func)

app.get('/', (request, response) => {
    response.status(201).send('hello word');
});

app.get('/api/users', (request, response) => {
    response.send(['1', '2', '3']);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});

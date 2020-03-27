const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        event: 'Semana OmniStack 11.0',
        name: 'Anderson O. Aristides'
    });
});

app.listen(3333);
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());


const dbPath = path.resolve(__dirname, 'Shub_Nikita_flowers.json');

app.get('/api/flowers', (request, response) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
        const jsonData = JSON.parse(data);
        response.json(jsonData);
    });
});

app.get('/api/flowers/:id', (request, response) => {
    const id = Number(request.params.id);

    fs.readFile(dbPath, 'utf8', (err, data) => {
        const jsonData = JSON.parse(data);
        const flower = jsonData.find(flower => flower.flowerId === id);
        response.json(flower);
    });
})

app.post('/api/flowers', (request, response) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {

        let jsonData = JSON.parse(data);

        const flower = request.body;

        jsonData = jsonData.concat(flower);

        fs.writeFile(dbPath, JSON.stringify(jsonData), (error) => {
            response.status(201).json(flower);
        })
    });
})


app.delete('/api/flowers/:id', (request, response) => {
    const id = Number(request.params.id);

    fs.readFile(dbPath, 'utf8', (err, data) => {

        let jsonData = JSON.parse(data);

        const flowerToDelete = jsonData.find(flower => flower.flowerId === id);

        jsonData = jsonData.filter(flower => flower.flowerId !== id);

        fs.writeFile(dbPath, JSON.stringify(jsonData), (error) => {
            response.status(200).json(flowerToDelete);
        });
    });
});


const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
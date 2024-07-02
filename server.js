
// const express = require('express');
// const path = require('path');
// const mongoose = require('mongoose');
// const Panorama = require('./models/Panorama');

// const app = express();

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/cucek', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.error('Could not connect to MongoDB', err));

// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/api/panoramas', async (req, res) => {
//     try {
//         const panoramas = await Panorama.find();
//         res.json(panoramas);
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });

// app.get('/api/panoramas/:sceneId', async (req, res) => {
//     const sceneId = req.params.sceneId;
//     try {
//         const panorama = await Panorama.findOne({ sceneId });
//         if (!panorama) {
//             return res.status(404).json({ message: 'Panorama not found' });
//         }
//         res.json(panorama);
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Panorama = require('./models/Panorama');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/cucek', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/panoramas', async (req, res) => {
    try {
        const panoramas = await Panorama.find();
        res.json(panoramas);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/api/panoramas/:sceneId', async (req, res) => {
    const sceneId = req.params.sceneId;
    try {
        const panorama = await Panorama.findOne({ sceneId });
        if (!panorama) {
            return res.status(404).json({ message: 'Panorama not found' });
        }
        res.json(panorama);
    } catch (err) {
        res.status(500).send(err);
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

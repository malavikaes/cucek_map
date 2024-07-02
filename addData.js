// const mongoose = require('mongoose');
// const Panorama = require('./models/Panorama');

// mongoose.connect('mongodb://localhost:27017/cucek', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.error('Could not connect to MongoDB', err));

// const panoramas = [
//     {
//         title: 'Panorama 1',
//         sceneId: 'scene1',
//         imagePath: 'sample-pano.jpg',
//         hotspots: [
//             {
//                 pitch: 10,
//                 yaw: 20,
//                 type: 'scene',
//                 text: 'Go to Scene 2',
//                 sceneId: 'scene2'
//             }
//         ]
//     },
//     {
//         title: 'Panorama 2',
//         sceneId: 'scene2',
//         imagePath: 'pano2.jpg',
//         hotspots: [
//             {
//                 pitch: -10,
//                 yaw: -20,
//                 type: 'scene',
//                 text: 'Go to Scene 1',
//                 sceneId: 'scene1'
//             }
//         ]
//     }
// ];

// Panorama.insertMany(panoramas)
//     .then(() => {
//         console.log('Data inserted');
//         mongoose.connection.close();
//     })
//     .catch(err => console.error('Error inserting data', err));

const mongoose = require('mongoose');
const Panorama = require('./models/Panorama');

mongoose.connect('mongodb://localhost:27017/cucek', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

const panoramas = [
    {
        title: 'Scene 1',
        sceneId: 'scene1',
        imagePath: 'pano1.jpg',
        hotspots: [
            {
                pitch: 10,
                yaw: 20,
                type: 'scene',
                text: 'Go to Scene 2',
                sceneId: 'scene2'
            }
        ]
    },
    {
        title: 'Scene 2',
        sceneId: 'scene2',
        imagePath: 'pano2.jpg',
        hotspots: [
            {
                pitch: -10,
                yaw: -20,
                type: 'scene',
                text: 'Go to Scene 1',
                sceneId: 'scene1'
            }
        ]
    },
    {
        title: 'Scene 3',
        sceneId: 'scene3',
        imagePath: 'pano3.jpg',
        hotspots: [
            {
                pitch: 15,
                yaw: 25,
                type: 'scene',
                text: 'Go to Scene 4',
                sceneId: 'scene4'
            }
        ]
    },
    {
        title: 'Scene 4',
        sceneId: 'scene4',
        imagePath: 'pano4.jpg',
        hotspots: [
            {
                pitch: -15,
                yaw: -25,
                type: 'scene',
                text: 'Go to Scene 3',
                sceneId: 'scene3'
            }
        ]
    }
];

Panorama.insertMany(panoramas)
    .then(() => {
        console.log('Data inserted');
        mongoose.connection.close();
    })
    .catch(err => console.error('Error inserting data', err));

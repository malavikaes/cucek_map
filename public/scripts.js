// scripts.js

let viewer;
const audioPlayer1 = document.getElementById('audioPlayer1');
const audioPlayer2 = document.getElementById('audioPlayer2');

function initViewer() {
    fetch('/api/panoramas')
        .then(response => response.json())
        .then(panoramas => {
            if (panoramas.length > 0) {
                const scenes = {};
                panoramas.forEach(panorama => {
                    scenes[panorama.sceneId] = {
                        title: panorama.title,
                        type: 'equirectangular',
                        panorama: panorama.imagePath,
                        hotSpots: panorama.hotspots.map(hotspot => ({
                            pitch: hotspot.pitch,
                            yaw: hotspot.yaw,
                            type: 'scene',
                            text: hotspot.text,
                            sceneId: hotspot.sceneId
                        }))
                    };
                });

                viewer = pannellum.viewer('panorama', {
                    "default": {
                        "firstScene": panoramas[0].sceneId,
                        "author": "CUCEK",
                        "sceneFadeDuration": 1000
                    },
                    "scenes": scenes
                });

                viewer.on('scenechange', function(sceneId) {
                    handleSceneChange(sceneId);
                });

                playAudio(audioPlayer1);
            } else {
                alert('No panoramas found.');
            }
        })
        .catch(error => {
            console.error('Error fetching panoramas:', error);
        });
}

function handleSceneChange(sceneId) {
    if (sceneId === 'scene1') {
        audioPlayer2.pause();
        audioPlayer2.currentTime = 0;
        playAudio(audioPlayer1);
    } else if (sceneId === 'scene2') {
        audioPlayer1.pause();
        audioPlayer1.currentTime = 0;
        playAudio(audioPlayer2);
    } else {
        audioPlayer1.pause();
        audioPlayer1.currentTime = 0;
        audioPlayer2.pause();
        audioPlayer2.currentTime = 0;
    }
}

function moveLeft() {
    if (viewer) viewer.setYaw(viewer.getYaw() - 90);
}

function moveRight() {
    if (viewer) viewer.setYaw(viewer.getYaw() + 90);
}

function moveUp() {
    if (viewer) viewer.setPitch(viewer.getPitch() + 10);
}

function moveDown() {
    if (viewer) viewer.setPitch(viewer.getPitch() - 10);
}

function playAudio(audioElement) {
    audioElement.currentTime = 0;
    const playPromise = audioElement.play();
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log('Audio playback was prevented. Trying to play after user interaction.');
            document.body.addEventListener('click', () => {
                audioElement.play();
            }, { once: true });
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initViewer();
});

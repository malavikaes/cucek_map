// panorama.js (or wherever your schema is defined)
const mongoose = require('mongoose');

const hotspotSchema = new mongoose.Schema({
  pitch: Number,
  yaw: Number,
  type: String,
  text: String,
  sceneId: String
});

const panoramaSchema = new mongoose.Schema({
  title: String,
  imagePath: String,
  sceneId: String,
  hotspots: [hotspotSchema]
});

const Panorama = mongoose.model('Panorama', panoramaSchema);

module.exports = Panorama;

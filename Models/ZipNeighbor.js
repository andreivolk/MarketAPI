const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ZipNeighborSchema = new Schema({
    Zip: Number,
    Neighbors: [Number]
},
 { collection: 'ZipNeighbors' });

module.exports = mongoose.model('ZipNeighbor', ZipNeighborSchema);

const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MarketSchema = new Schema({
    FMID: Number,
    MarketName: String,
    Website: String,
    Facebook: String,
    Twitter: String,
    Youtube: String,
    OtherMedia: String,
    street: String,
    city: String,
    County: String,
    State: String,
    zip: String,
    Season1Date: String,
    Season1Time: String,
    Season2Date: String,
    Season2Time: String,
    Season3Date: String,
    Season3Time: String,
    Season4Date: String,
    Season4Time: String,
    x: String,
    y: String,
    Location: String,
    Credit: String,
    WIC: String,
    WICcash: String,
    SFMNP: String,
    SNAP: String,
    Organic: String,
    Bakedgoods: String,
    Cheese: String,
    Crafts: String,
    Flowers: String,
    Eggs: String,
    Seafood: String,
    Herbs: String,
    Vegetables: String,
    Honey: String,
    Jams: String,
    Maple: String,
    Meat: String,
    Nursery: String,
    Nuts: String,
    Plants: String,
    Poultry: String,
    Prepared: String,
    Soap: String,
    Trees: String,
    Wine: String,
    Coffee: String,
    Beans: String,
    Fruits: String,
    Grains: String,
    Juices: String,
    Mushrooms: String,
    PetFood: String,
    Tofu: String,
    WildHarvested: String,
    updateTime: String
},
 { collection: 'Markets' });

module.exports = mongoose.model('Market', MarketSchema);

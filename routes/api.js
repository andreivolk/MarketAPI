const express = require('express');
const router = express.Router();
const Market = require('../Models/Market');
const ZipNeighbor = require('../Models/ZipNeighbor');
//const ValidZips = require('../Models/ValidZips');
var cors = require('cors');

//GET for market based on FMID
router.get('/market/:id', cors(), function(req,res){
  Market.findOne({'FMID': req.params.id}, function (err, results) {
    res.send(results);
    res.end();
    });
});
//GET for valid vs invalid zip
// router.get('/zip/:zip', cors(), function(req,res){
//     res.send(ValidZips.checkZip(req.params.zip));
//     res.end();
// });
//GET for markets based on Zip
// router.get('/markets/:zip', cors(), function(req,res){
//   var neighbors;
//   ZipNeighbor.findOne({'Zip': req.params.zip}, function (err, results) {
//     neighbors = results.Neighbors;
//   });
//       Market.find({ 'zip': { $in: neighbors } }, function (err, markets){
//     res.send(markets);
//     res.end();
//   });
// });

module.exports = router;

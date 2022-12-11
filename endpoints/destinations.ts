import { HotelInfo } from '../types/hotel-info';

import express = require('express');
import DestinationsFinder = require('../modules/destinations_finder');
import HotelsInfoProvider = require('../providers/hotels-info-provider');

const router = express.Router();

router.get('/', (req, res) => {
    const hotelsInfo: HotelInfo[] = HotelsInfoProvider.getHotelsInfo();

    res.json(DestinationsFinder.find(hotelsInfo));
});

module.exports = router;
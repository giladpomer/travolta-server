import { HotelInfo } from '../types/hotel-info';
import { HotelSearchResult } from '../types/hotel-search-result';

import express = require('express');
import HotelsSearcher = require('../modules/hotels-searcher');
import HotelsInfoProvider = require('../providers/hotels-info-provider');

const router = express.Router();

router.post('/', (req, res) => {
    const hotelsInfo: HotelInfo[] = HotelsInfoProvider.getHotelsInfo();

    const searchResults: HotelSearchResult[] = HotelsSearcher.search(
        hotelsInfo,
        req.body.destination,
        new Date(req.body.checkInDate),
        new Date(req.body.checkOutDate),
        req.body.adultsAmount
    );

    res.json(searchResults);
});

module.exports = router;
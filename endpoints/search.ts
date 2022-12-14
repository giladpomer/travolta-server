import { HotelInfo } from '../types/hotel-info';
import { HotelSearchResult } from '../types/hotel-search-result';
import { SearchParameters } from '../types/search-parameters';

import express = require('express');
import HotelsSearcher = require('../modules/hotels-searcher');
import HotelsInfoProvider = require('../providers/hotels-info-provider');

const router = express.Router();

router.post('/', (req, res) => {
    const hotelsInfo: HotelInfo[] = HotelsInfoProvider.getHotelsInfo();

    const searchParameters: SearchParameters = {
        destination: req.body.destination,
        timeframe: {
            from: new Date(req.body.timeframe.from),
            until: new Date(req.body.timeframe.until)
        },
        adultsAmount: req.body.adultsAmount
    };

    const searchResults: HotelSearchResult[] = HotelsSearcher.search(
        hotelsInfo,
        searchParameters
    );

    res.json(searchResults);
});

module.exports = router;
import { Location } from '../types/location';
import { HotelInfo } from '../types/hotel-info';
import { HotelSearchResult } from '../types/hotel-search-result';

import HotelsSearcher = require('./hotels-searcher');

test('search results based on destination', () => {
    const mockHotelsInfo: HotelInfo[] = [
        {
            id: 1,
            name: 'Hotel in Madrid',
            city: 'Madrid',
            country: 'Spain',
            price_per_night: 0,
            photo_url: ''
        },
        {
            id: 2,
            name: 'Hotel in central Madrid',
            city: 'Madrid',
            country: 'Spain',
            price_per_night: 0,
            photo_url: ''
        },
        {
            id: 3,
            name: 'Hotel in Berlin',
            city: 'Berlin',
            country: 'Germany',
            price_per_night: 0,
            photo_url: ''
        }
    ];

    const expectedHotelsInSearchResults: string[] = [
        'Hotel in Madrid',
        'Hotel in central Madrid'
    ];

    const searchDestination: Location = {
        city: 'Madrid',
        country: 'Spain'
    };

    const searchResults: HotelSearchResult[] = HotelsSearcher.search(
        mockHotelsInfo,
        searchDestination,
        new Date(),
        new Date(),
        0
    );

    const hotelsInSearchResults: string[] = searchResults.map(searchResult => searchResult.hotelInfo.name);

    expect(hotelsInSearchResults)
        .toEqual(expectedHotelsInSearchResults);
});
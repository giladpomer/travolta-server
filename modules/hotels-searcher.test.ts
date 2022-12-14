import { Location } from '../types/location';
import { HotelInfo } from '../types/hotel-info';
import { HotelSearchResult } from '../types/hotel-search-result';
import { SearchParameters } from '../types/search-parameters';

import HotelsSearcher = require('./hotels-searcher');

test('search results based on destination', () => {
    const mockHotelsInfo: HotelInfo[] = [
        {
            id: 1,
            name: 'Hotel in Madrid',
            location: {
                city: 'Madrid',
                country: 'Spain'
            },
            price_per_night: 0,
            availability: [],
            photo_url: ''
        },
        {
            id: 2,
            name: 'Hotel in central Madrid',
            location: {
                city: 'Madrid',
                country: 'Spain'
            },
            price_per_night: 0,
            availability: [],
            photo_url: ''
        },
        {
            id: 3,
            name: 'Hotel in Berlin',
            location: {
                city: 'Berlin',
                country: 'Germany'
            },
            price_per_night: 0,
            availability: [],
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

    const searchParameters: SearchParameters = {
        destination: searchDestination,
        timeframe: {
            from: new Date(),
            until: new Date(),
        },
        adultsAmount: 0
    };

    const searchResults: HotelSearchResult[] = HotelsSearcher.search(
        mockHotelsInfo,
        searchParameters
    );

    const hotelsInSearchResults: string[] = searchResults.map(searchResult => searchResult.hotelInfo.name);

    expect(hotelsInSearchResults)
        .toEqual(expectedHotelsInSearchResults);
});
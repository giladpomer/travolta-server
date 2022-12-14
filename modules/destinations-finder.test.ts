import { Location } from '../types/location';
import { HotelInfo } from '../types/hotel-info';

import DestinationsFinder = require('./destinations-finder');

test('destinations list based on hotels list', () => {
    const mockHotelsInfo: HotelInfo[] = [
        {
            id: 1,
            name: '',
            location: {
                city: 'Berlin',
                country: 'Germany'
            },
            price_per_night: 0,
            photo_url: ''
        },
        {
            id: 2,
            name: '',
            location: {
                city: 'Berlin',
                country: 'Germany'
            },
            price_per_night: 0,
            photo_url: ''
        },
        {
            id: 3,
            name: '',
            location: {
                city: 'Paris',
                country: 'France'
            },
            price_per_night: 0,
            photo_url: ''
        }
    ];

    const expectedDestinationList: Location[] = [
        {
            city: 'Berlin',
            country: 'Germany'
        },
        {
            city: 'Paris',
            country: 'France'
        }
    ];

    expect(DestinationsFinder.find(mockHotelsInfo))
        .toEqual(expectedDestinationList);
});
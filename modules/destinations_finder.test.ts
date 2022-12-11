import { Destination } from '../types/destination';
import { HotelInfo } from '../types/hotel-info';

import DestinationsFinder = require('./destinations_finder');

test('destinations list based on hotels list', () => {
    const mockHotelsInfo: HotelInfo[] = [
        {
            id: 1,
            name: '',
            city: 'Berlin',
            country: 'Germany',
            price_per_night: 0,
            photo_url: ''
        },
        {
            id: 2,
            name: '',
            city: 'Berlin',
            country: 'Germany',
            price_per_night: 0,
            photo_url: ''
        },
        {
            id: 3,
            name: '',
            city: 'Paris',
            country: 'France',
            price_per_night: 0,
            photo_url: ''
        }
    ];

    const expectedDestinationList: Destination[] = [
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
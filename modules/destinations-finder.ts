import { Location } from '../types/location';
import { HotelInfo } from '../types/hotel-info';

import deepEqual = require('deep-equal');

export function find(hotelsInfo: HotelInfo[]): Location[] {
    const destinations: Location[] = [];

    hotelsInfo.forEach(hotelInfo => {
        const destination: Location = {
            city: hotelInfo.city,
            country: hotelInfo.country
        };

        //add if does not already exist
        if (!destinations.some(item => deepEqual(item, destination))) {
            destinations.push(destination);
        }
    });

    return destinations;
}
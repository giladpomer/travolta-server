import { Location } from '../types/location';
import { HotelInfo } from '../types/hotel-info';

import deepEqual = require('deep-equal');

export function find(hotelsInfo: HotelInfo[]): Location[] {
    const destinations: Location[] = [];

    hotelsInfo.forEach(hotelInfo => {
        const destination: Location = hotelInfo.location;

        //add if does not already exist
        if (!destinations.some(item => deepEqual(item, destination))) {
            destinations.push(destination);
        }
    });

    return destinations;
}
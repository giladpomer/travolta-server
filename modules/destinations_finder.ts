import { Destination } from "../types/destination";
import { HotelInfo } from "../types/hotel-info";

import deepEqual = require('deep-equal');

export function find(hotelsInfo: HotelInfo[]): Destination[] {
    const destinations: Destination[] = [];

    hotelsInfo.forEach(hotelInfo => {
        const destination: Destination = {
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
import { HotelInfo } from '../types/hotel-info';

import fs = require('fs');

export function getHotelsInfo(): HotelInfo[] {
    return JSON.parse(
        fs.readFileSync('data/hotels.json', 'utf8'),
        availabilityDatesConverter);
}

function availabilityDatesConverter(key, value) {
    if (typeof value === 'string' && (key === 'from' || key === 'until')) {
        return new Date(value);
    }

    return value;
}
import { HotelInfo } from '../types/hotel-info';

import fs = require('fs');

export function getHotelsInfo(): HotelInfo[] {
    return JSON.parse(fs.readFileSync('data/hotels.json', 'utf8'));
}
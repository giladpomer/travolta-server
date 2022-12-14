import { Location } from '../types/location';
import { HotelInfo } from '../types/hotel-info';
import { HotelSearchResult } from '../types/hotel-search-result';

import StayPriceCalculator = require('./stay-price-calculator');
import deepEqual = require('deep-equal');

export function search(
    hotelsInfo: HotelInfo[],
    destination: Location,
    checkInDate: Date,
    checkOutDate: Date,
    adultsAmount: number): HotelSearchResult[] {
    const matchingHotelInfos: HotelInfo[] = hotelsInfo
        .filter(hotelInfo => isHotelInfoMatchingDestination(hotelInfo, destination));

    return matchingHotelInfos.map(hotelInfo => convertHotelInfoIntoSearchResult(
        hotelInfo,
        checkInDate,
        checkOutDate));
}

function isHotelInfoMatchingDestination(
    hotelInfo: HotelInfo,
    destination: Location): boolean {
    return deepEqual(hotelInfo.location, destination);
}

function convertHotelInfoIntoSearchResult(
    hotelInfo: HotelInfo,
    checkInDate: Date,
    checkOutDate: Date): HotelSearchResult {
    const priceOfStay: number = StayPriceCalculator.calculateStayPrice(
        hotelInfo.price_per_night,
        checkInDate,
        checkOutDate
    );

    return {
        hotelInfo: hotelInfo,
        price_of_stay: priceOfStay,
    };
}
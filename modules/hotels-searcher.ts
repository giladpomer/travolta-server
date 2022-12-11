import { Destination } from '../types/destination';
import { HotelInfo } from '../types/hotel-info';
import { HotelSearchResult } from '../types/hotel-search-result';

import StayPriceCalculator = require('./stay-price-calculator');

export function search(
    hotelsInfo: HotelInfo[],
    destination: Destination,
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
    destination: Destination): boolean {
    return hotelInfo.city === destination.city
        && hotelInfo.country === destination.country;
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
        id: hotelInfo.id,
        name: hotelInfo.name,
        city: hotelInfo.city,
        country: hotelInfo.country,
        price_of_stay: priceOfStay,
        photo_url: hotelInfo.photo_url
    };
}
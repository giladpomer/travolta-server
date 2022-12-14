import { Location } from '../types/location';
import { HotelInfo } from '../types/hotel-info';
import { HotelSearchResult } from '../types/hotel-search-result';
import { SearchParameters } from '../types/search-parameters';
import { DateSpan } from '../types/date-span';

import StayPriceCalculator = require('./stay-price-calculator');
import AvailabilityCalculator = require('./availability-calculator');
import deepEqual = require('deep-equal');

export function search(
    hotelsInfo: HotelInfo[],
    searchParameters: SearchParameters): HotelSearchResult[] {
    const matchingHotelInfos: HotelInfo[] = hotelsInfo
        .filter(hotelInfo => isHotelInfoMatchingDestination(hotelInfo, searchParameters.destination));

    return matchingHotelInfos.map(hotelInfo => convertHotelInfoIntoSearchResult(
        hotelInfo,
        searchParameters.timeframe));
}

function isHotelInfoMatchingDestination(
    hotelInfo: HotelInfo,
    destination: Location): boolean {
    return deepEqual(hotelInfo.location, destination);
}

function convertHotelInfoIntoSearchResult(
    hotelInfo: HotelInfo,
    timeframe: DateSpan): HotelSearchResult {
    const priceOfStay: number = StayPriceCalculator.calculateStayPrice(
        hotelInfo.price_per_night,
        timeframe
    );

    const isAvailable: boolean = AvailabilityCalculator.calculateIsAvailableInTimeframe(
        hotelInfo.availability,
        timeframe
    );

    return {
        hotelInfo: hotelInfo,
        price_of_stay: priceOfStay,
        is_available: isAvailable
    };
}
import { DateSpan } from '../types/date-span';

import StayPriceCalculator = require('./stay-price-calculator');

test('price of stay based on price per night and check in dates', () => {
    const pricePerNight: number = 7;
    const timeframe: DateSpan = {
        from: new Date(2022, 12, 19),
        until: new Date(2022, 12, 23)
    };

    const stayPrice: number = StayPriceCalculator.calculateStayPrice(
        pricePerNight,
        timeframe);

    expect(stayPrice)
        .toBe(28);
});
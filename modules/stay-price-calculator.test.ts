import StayPriceCalculator = require('./stay-price-calculator');

test('price of stay based on price per night and check in dates', () => {
    const pricePerNight: number = 7;
    const checkInDate: Date = new Date(2022, 12, 19);
    const checkOutDate: Date = new Date(2022, 12, 23);

    const stayPrice: number = StayPriceCalculator.calculateStayPrice(
        pricePerNight,
        checkInDate,
        checkOutDate);

    expect(stayPrice)
        .toBe(28);
});
const DAY_IN_MILLISECONDS: number = 1000 * 60 * 60 * 24;

export function calculateStayPrice(
    pricePerNight: number,
    checkInDate: Date,
    checkOutDate: Date): number {
    const nights: number = calculateNightsAmount(checkInDate, checkOutDate);

    return nights * pricePerNight;
}

function calculateNightsAmount(
    checkInDate: Date,
    checkOutDate: Date): number {
    const timeSpanInMilliseconds: number = checkOutDate.getTime() - checkInDate.getTime();
    return Math.round(timeSpanInMilliseconds / DAY_IN_MILLISECONDS);
}
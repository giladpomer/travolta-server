import { DateSpan } from '../types/date-span';

const DAY_IN_MILLISECONDS: number = 1000 * 60 * 60 * 24;

export function calculateStayPrice(
    pricePerNight: number,
    timeframe: DateSpan): number {
    const nights: number = calculateNightsAmount(timeframe);

    return nights * pricePerNight;
}

function calculateNightsAmount(
    timeframe: DateSpan): number {
    const timeSpanInMilliseconds: number = timeframe.until.getTime() - timeframe.from.getTime();
    return Math.round(timeSpanInMilliseconds / DAY_IN_MILLISECONDS);
}
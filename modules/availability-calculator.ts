import { DateSpan } from '../types/date-span';

export function calculateIsAvailableInTimeframe(
    availability: DateSpan[],
    timeframe: DateSpan): boolean {
    for (let i = 0; i < availability.length; i++) {
        const availabilityTimeframe = availability[i];

        if (isTimeframeCompletelyInsideAvailabilityTimeframe(
            availabilityTimeframe,
            timeframe)) {
            return true;
        }
    }

    return false;
}

function isTimeframeCompletelyInsideAvailabilityTimeframe(
    availabilityTimeframe: DateSpan,
    timeframe: DateSpan): boolean {
    return timeframe.from >= availabilityTimeframe.from
        && timeframe.until <= availabilityTimeframe.until;
}
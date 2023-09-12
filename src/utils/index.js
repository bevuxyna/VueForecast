const PRESSUER_UNITS = 0.750062;

export const capitalizeFirstLetter = (str) => {
    if (!str) {
        return '';
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const setPressuerUnitsToMm = (hpa) => {
    return Math.round(hpa * PRESSUER_UNITS);
}

export const getTime = (seconds) => {
    return new Date(seconds * 1000).toLocaleTimeString('ru-RU', { timeZone: 'Atlantic/Reykjavik' });
}
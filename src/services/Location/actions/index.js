export function changeLocation(location) {
    return {
        type: 'LOCATION',
        location: location
    }
}

export function setCurrentTemp1(currentTemp) {
    return {
        type: 'SET-CURRENT-TEMP',
        currentTemp: currentTemp
    }
}

export function setDate1(dates) {
    return {
        type: 'SET-DATES',
        dates: dates
    }
}

export function setTemp1(temps) {
    return {
        type: 'SET-TEMPS',
        temps: temps
    }
}

export function setSelected1(selectedValue) {
    return {
        type: 'SET-SELECTED-VALUES',
        selectedValue: selectedValue
    }
}
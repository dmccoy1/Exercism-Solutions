export function needsLicense(kind) {
  if (kind == 'car' || kind == 'truck') {
    return true
  } else { return false }
}

export function chooseVehicle(option1, option2) {
  if (option1 > option2) {
    return option2 + ' is clearly the better choice.'
  } else { return option1 + ' is clearly the better choice.' }
}

export function calculateResellPrice(originalPrice, age) {
  if (age < 3) {
    let percent = 80 / 100
    return originalPrice * percent
  } else if (age > 10) {
    return originalPrice / 2
  }
  else if (age >= 3 && age <= 10) {
    let percent = 70 / 100
    return originalPrice * percent
  }
}

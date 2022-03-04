
export function dayRate(ratePerHour) {
  return ratePerHour * 8
}

export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / ratePerHour / 8)
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const billableDays = 22;
  const numberOfMonths = Math.floor(numDays / billableDays);
  const numberOfDaysRemainig = numDays % billableDays;
  const discountedValue = (1 - discount) * billableDays * dayRate(ratePerHour);
  return Math.ceil(discountedValue * numberOfMonths + numberOfDaysRemainig * dayRate(ratePerHour))
}

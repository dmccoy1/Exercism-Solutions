export function totalBirdCount(birdsPerDay) {
  let sum = 0
  for (let i = 0; i < birdsPerDay.length; i++) {
    sum += birdsPerDay[i]
  }
  return sum
}

export function birdsInWeek(birdsPerDay, week) {
  const weekStart = (week - 1) * 7;
  const weekEnd = weekStart + 7;

  let sum = 0;

  for (let i = weekStart; i < weekEnd; i++) {
    sum += birdsPerDay[i];
  }
  return sum
}

export function fixBirdCountLog(birdsPerDay) {
  const days = birdsPerDay.length;

  for (let i = 0; i < days; i += 2) {
    birdsPerDay[i] += 1
  }
  return birdsPerDay;
}


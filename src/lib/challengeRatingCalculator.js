const calculate = (encounterExp) => {
  if (encounterExp < 400) return -1

  for (let index = 0; index < thresholds.length; index++) {
    const difference = thresholds[index] - encounterExp
    if (difference === 0 || difference > 0) return index + 1
  }
  return thresholds.length + 1
}

const thresholds = [
  400,
  600,
  800,
  1200,
  1600,
  2400,
  3200,
  4800,
  6400,
  9600,
  12800,
  19200,
  25600,
  38400,
  51200,
  76800,
  102400,
  153600,
  204800,
  307200,
  409600,
  614400,
  819200
]

export default calculate

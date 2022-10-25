const fortuneCalc = (fortuneLevel) => (82 / ++fortuneLevel) * ((fortuneLevel * (fortuneLevel + 1)) / 2) / 100

console.log(fortuneCalc(100))

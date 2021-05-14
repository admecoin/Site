import { calculatePenEarnedPerThousandDollars, apyModalRoi } from '../utils/compoundApyHelpers'

it.each([
  [{ numberOfDays: 1, farmApy: 365, penPrice: 1 }, 10],
  [{ numberOfDays: 7, farmApy: 20, penPrice: 0.8 }, 4.8],
  [{ numberOfDays: 40, farmApy: 212.21, penPrice: 1.2 }, 217.48],
  [{ numberOfDays: 330, farmApy: 45.12, penPrice: 5 }, 100.67],
  [{ numberOfDays: 365, farmApy: 100, penPrice: 0.2 }, 8572.84],
  [{ numberOfDays: 365, farmApy: 20, penPrice: 1 }, 221.34],
])('calculate pen earned with values %o', ({ numberOfDays, farmApy, penPrice }, expected) => {
  expect(calculatePenEarnedPerThousandDollars({ numberOfDays, farmApy, penPrice })).toEqual(expected)
})

it.each([
  [{ amountEarned: 10, amountInvested: 1000 }, '1.00'],
  [{ amountEarned: 4.8, amountInvested: 10 }, '48.00'],
  [{ amountEarned: 217.48, amountInvested: 950 }, '22.89'],
  [{ amountEarned: 100.67, amountInvested: 100 }, '100.67'],
  [{ amountEarned: 8572.84, amountInvested: 20000 }, '42.86'],
])('calculate roi % with values %o', ({ amountEarned, amountInvested }, expected) => {
  expect(apyModalRoi({ amountEarned, amountInvested })).toEqual(expected)
})

import { CustomOperation } from './custom-number.types'

export type BigNumber = number[]
const MAX_AUTHORIZED_DIGITS = 15
const MAX_BEFORE_ADDING_ONE = 10 ** MAX_AUTHORIZED_DIGITS

const fromString = (s: string): BigNumber => {
  let index = s.length
  const bigNumber = []
  while (index - MAX_AUTHORIZED_DIGITS >= 0) {
    const subNumber = s.substr(
      index - MAX_AUTHORIZED_DIGITS,
      MAX_AUTHORIZED_DIGITS
    )
    bigNumber.push(+subNumber)
    index -= MAX_AUTHORIZED_DIGITS
  }
  bigNumber.push(+s.substr(0, index))
  // Unit at the end of the array
  return bigNumber.reverse()
}

const add = (n1: BigNumber, n2: BigNumber): BigNumber => {
  return reccursiveAdd(n1, n2)
}

function reccursiveAdd (n1: BigNumber, n2: BigNumber, addOne = 0): BigNumber {
  if (n1.length <= 1 && n2.length <= 1) {
    // ASSERT : SUM < Number.MAX_SAFE_NUMBER
    const sum = (n1[0] || 0) + (n2[0] || 0) + addOne
    const currentAddOne = +(sum >= MAX_BEFORE_ADDING_ONE)
    if (currentAddOne) {
      return [1, sum - MAX_BEFORE_ADDING_ONE]
    } else {
      return [sum]
    }
  }

  const poppedN1 = n1.pop() || 0
  const poppedN2 = n2.pop() || 0

  let subSum = (poppedN1 || 0) + (poppedN2 || 0) + addOne
  const willAddOne = +(subSum >= MAX_BEFORE_ADDING_ONE)
  if (willAddOne) subSum -= MAX_BEFORE_ADDING_ONE
  return [...reccursiveAdd(n1, n2, willAddOne), subSum]
}

const multiply = (n1: BigNumber, n2: BigNumber): BigNumber => undefined

const toString = (n: BigNumber): string => {
  let str = `${n[0]}`
  for (let index = 1; index < n.length; index++) {
    str += `${n[index]}`.padStart(MAX_AUTHORIZED_DIGITS, '0')
  }
  return str
}

export const BigNumberOperation: CustomOperation<BigNumber> = {
  fromString,
  add,
  multiply,
  toString
}

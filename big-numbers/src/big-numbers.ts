import { CustomOperation } from './custom-number.types'

export type BigNumber = number[]
const MAX_AUTHORIZED_DIGITS = 15

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
  return bigNumber.reverse()
}

const add = (n1: BigNumber, n2: BigNumber): BigNumber => undefined

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

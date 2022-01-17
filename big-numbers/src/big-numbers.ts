import { CustomOperation } from './custom-number.types'

export type BigNumber = any

const fromString = (s: string): BigNumber => {
  try {
    return BigInt(s)
  } catch (error) {
    throw new Error('Not a number')
  }
}

const add = (n1: BigNumber, n2: BigNumber): BigNumber => {
  return n1 + n2
}

const multiply = (n1: BigNumber, n2: BigNumber): BigNumber => {
  return n1 * n2
}

const toString = (n: BigNumber) => n.toString()

export const BigNumberOperation: CustomOperation<BigNumber> = {
  fromString,
  add,
  multiply,
  toString
}

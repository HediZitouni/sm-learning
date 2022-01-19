import { CustomOperation } from './custom-number.types'

export type BigNumber = any

const fromString = (s: string): BigNumber => undefined

const add = (n1: BigNumber, n2: BigNumber): BigNumber => undefined

const multiply = (n1: BigNumber, n2: BigNumber): BigNumber => undefined

const toString = (n: BigNumber) => ''

export const BigNumberOperation: CustomOperation<BigNumber> = {
  fromString,
  add,
  multiply,
  toString
}

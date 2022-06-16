import {
  ERC721__factory,
  SCERC721Derivative__factory,
  SealCredLedger,
} from '@big-whale-labs/seal-cred-ledger-contract'
import defaultProvider from 'helpers/defaultProvider'

export default async function (
  sealCredLedger: SealCredLedger,
  originalContract: string
) {
  return {
    originalContract: ERC721__factory.connect(
      originalContract,
      defaultProvider
    ),
    derivativeContract: SCERC721Derivative__factory.connect(
      await sealCredLedger.getDerivativeContract(originalContract),
      defaultProvider
    ),
  }
}

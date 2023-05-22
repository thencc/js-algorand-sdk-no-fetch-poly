import { TransactionType, TransactionParams } from './base';
import { ConstructTransaction } from './builder';
type SpecificParametersForCreate = Pick<TransactionParams, 'assetTotal' | 'assetDecimals' | 'assetDefaultFrozen' | 'assetUnitName' | 'assetName' | 'assetURL' | 'assetMetadataHash' | 'assetManager' | 'assetReserve' | 'assetFreeze' | 'assetClawback'>;
interface OverwritesForCreate {
    type?: TransactionType.acfg;
}
export type AssetCreateTransaction = ConstructTransaction<SpecificParametersForCreate, OverwritesForCreate>;
type SpecificParametersForConfig = Pick<TransactionParams, 'assetIndex' | 'assetManager' | 'assetReserve' | 'assetFreeze' | 'assetClawback'>;
interface OverwritesForConfig {
    type?: TransactionType.acfg;
}
export type AssetConfigurationTransaction = ConstructTransaction<SpecificParametersForConfig, OverwritesForConfig>;
type SpecificParametersForDestroy = Pick<TransactionParams, 'assetIndex'>;
interface OverwritesForDestroy {
    type?: TransactionType.acfg;
}
export type AssetDestroyTransaction = ConstructTransaction<SpecificParametersForDestroy, OverwritesForDestroy>;
type SpecificParametersForFreeze = Pick<TransactionParams, 'assetIndex' | 'freezeAccount' | 'freezeState'>;
interface OverwritesForFreeze {
    type?: TransactionType.afrz;
}
export type AssetFreezeTransaction = ConstructTransaction<SpecificParametersForFreeze, OverwritesForFreeze>;
type SpecificParametersForTransfer = Pick<TransactionParams, 'from' | 'to' | 'closeRemainderTo' | 'assetRevocationTarget' | 'amount' | 'assetIndex'>;
interface OverwritesForTransfer {
    type?: TransactionType.axfer;
}
export type AssetTransferTransaction = ConstructTransaction<SpecificParametersForTransfer, OverwritesForTransfer>;
export {};

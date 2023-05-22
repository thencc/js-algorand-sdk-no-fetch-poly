import { TransactionType, TransactionParams } from './base';
import { ConstructTransaction } from './builder';
type SpecificParametersForCreate = Pick<TransactionParams, 'appIndex' | 'appOnComplete' | 'appApprovalProgram' | 'appClearProgram' | 'appLocalInts' | 'appLocalByteSlices' | 'appGlobalInts' | 'appGlobalByteSlices' | 'appArgs' | 'appAccounts' | 'appForeignApps' | 'appForeignAssets' | 'boxes' | 'extraPages'>;
interface OverwritesForCreate {
    type?: TransactionType.appl;
}
export type ApplicationCreateTransaction = ConstructTransaction<SpecificParametersForCreate, OverwritesForCreate>;
type SpecificParametersForUpdate = Pick<TransactionParams, 'appIndex' | 'appOnComplete' | 'appApprovalProgram' | 'appClearProgram' | 'appArgs' | 'appAccounts' | 'appForeignApps' | 'appForeignAssets' | 'boxes'>;
interface OverwritesForUpdate {
    type?: TransactionType.appl;
}
export type ApplicationUpdateTransaction = ConstructTransaction<SpecificParametersForUpdate, OverwritesForUpdate>;
type SpecificParametersForDelete = Pick<TransactionParams, 'appIndex' | 'appOnComplete' | 'appArgs' | 'appAccounts' | 'appForeignApps' | 'appForeignAssets' | 'boxes'>;
interface OverwritesForDelete {
    type?: TransactionType.appl;
}
export type ApplicationDeleteTransaction = ConstructTransaction<SpecificParametersForDelete, OverwritesForDelete>;
export type ApplicationOptInTransaction = ApplicationDeleteTransaction;
export type ApplicationCloseOutTransaction = ApplicationDeleteTransaction;
export type ApplicationClearStateTransaction = ApplicationDeleteTransaction;
export type ApplicationNoOpTransaction = ApplicationDeleteTransaction;
export {};

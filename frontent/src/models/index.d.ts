import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerRequestDonation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RequestDonation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly text?: string | null;
  readonly walletAddress?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRequestDonation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RequestDonation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly text?: string | null;
  readonly walletAddress?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RequestDonation = LazyLoading extends LazyLoadingDisabled ? EagerRequestDonation : LazyRequestDonation

export declare const RequestDonation: (new (init: ModelInit<RequestDonation>) => RequestDonation) & {
  copyOf(source: RequestDonation, mutator: (draft: MutableModel<RequestDonation>) => MutableModel<RequestDonation> | void): RequestDonation;
}
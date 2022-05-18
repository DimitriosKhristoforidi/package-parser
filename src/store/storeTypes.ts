import { IPackage } from '../types/AppTypes';

export type TState = {
  packagesList: IPackage[];
  loading: boolean;
};

export type TAction = {
  type: string;
  payload: TActionPayload;
};

export type TActionPayload = boolean | IPackage[];

export type TActionCreator = (payload: TActionPayload) => TAction;

export type TReducer = (state: TState, action: TAction) => any;

import { IPackage } from './AppTypes';

export interface IGetPackageResponseResultElement {
  package: IPackage;
}

export interface IGetPackageResponse {
  total: number;
  results: IGetPackageResponseResultElement[];
}

export interface IApi {
  getPackage: (name: string) => Promise<IGetPackageResponse>;
}

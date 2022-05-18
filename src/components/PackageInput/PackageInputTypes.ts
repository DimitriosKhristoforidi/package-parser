import { IPackage } from '../../types/AppTypes';

export interface IPackageFormFields {
  package: string;
}

export type TOnFinish = (e: IPackageFormFields) => void;

export type TGetPackagesData = (
  dependenciesList: string[],
) => Promise<IPackage[]>;

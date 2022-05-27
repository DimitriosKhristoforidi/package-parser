export interface IPackageLinks {
  npm: string;
}

export interface IPackage {
  name: string;
  description: string;
  keywords: string[];
  links: IPackageLinks;
}

export interface IPackagesState {
  packagesList: IPackage[];
  loading: boolean;
}

export type TGetPackagesData = (
  dependenciesList: string[],
) => Promise<IPackage[]>;

export type TValidatePackagesTerm = (packagesTerm: string) => void;

export type TIsArray = (array: any[]) => void;

export type TIsEmpty = (line: string) => void;

export type TGetEmptyPackage = (name: string) => IPackage;

export interface IMaintainer {
  name: string;
  email: string;
}

export interface IAuthor {
  name: string;
}

export interface IPackage {
  name: string;
  description: string;
  author?: IAuthor;
  maintainers: IMaintainer[];
  homepage: string;
}

export interface IPackagesState {
  packagesList: IPackage[];
  loading: boolean;
  alertMessage?: string;
}

export type TGetPackagesData = (
  dependenciesList: string[],
) => Promise<IPackage[]>;

export type TValidatePackagesTerm = (packagesTerm: string) => void;

export type TIsArray = (array: any) => boolean;

export type TIsEmpty = (line: string) => boolean;

export type TGetEmptyPackage = (name: string) => IPackage;

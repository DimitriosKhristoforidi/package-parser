export interface IPackage {
  name: string;
  description: string;
  keywords: string[];
  links: string;
}

export interface IPackagesState {
  packagesList: IPackage[];
  loading: boolean;
}

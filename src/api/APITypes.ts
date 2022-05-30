import { IPackage } from '../features/packages/packagesSliceTypes';

export interface IApi {
  getPackage: (name: string) => Promise<IPackage>;
}

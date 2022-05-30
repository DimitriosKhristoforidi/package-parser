import {
  TGetEmptyPackage,
  TGetPackagesData,
  TIsArray,
  TIsEmpty,
  TValidatePackagesTerm,
} from './packagesSliceTypes';
import { EMPTY_JSON, ERROR_MESSAGES } from './constants';
import API from '../../api';

export const getEmptyPackage: TGetEmptyPackage = (name) => {
  return {
    name,
    description: '',
    author: { name: '' },
    maintainers: [],
    homepage: '',
  };
};

export const getPackagesData: TGetPackagesData = async (dependenciesList) => {
  const promises = dependenciesList.map((dep) => API.getPackage(dep));

  return await Promise.all(promises);
};

export const isArray: TIsArray = (array) => {
  return Array.isArray(array);
};

export const isEmpty: TIsEmpty = (line) => {
  return !line || line === EMPTY_JSON;
};

export const validatePackagesTerm: TValidatePackagesTerm = async (
  packagesTerm,
) => {
  if (isEmpty(packagesTerm)) {
    throw new Error(ERROR_MESSAGES.EMPTY_JSON);
  }
  try {
    const json = JSON.parse(packagesTerm);
    if (isArray(json)) {
      throw new Error();
    }
  } catch {
    throw new Error(ERROR_MESSAGES.NOT_A_JSON);
  }
};

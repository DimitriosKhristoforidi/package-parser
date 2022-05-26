import {
  TGetEmptyPackage,
  TGetPackagesData,
  TIsArray,
  TIsEmpty,
  TValidatePackagesTerm,
} from './packagesSliceTypes';
import { EMPTY_JSON, ERROR_MESSAGES } from './constants';
import API from '../../API';

export const getEmptyPackage: TGetEmptyPackage = (name) => {
  return {
    name,
    description: '-',
    keywords: [],
    links: [],
  };
};

export const getPackagesData: TGetPackagesData = async (dependenciesList) => {
  const promises = dependenciesList.map((dep) => API.getPackage(dep));

  return await Promise.all(promises).then((res) =>
    res.map(
      (item, idx) =>
        item.results[0]?.package || getEmptyPackage(dependenciesList[idx]),
    ),
  );
};

const isArray: TIsArray = (array) => {
  if (Array.isArray(array)) {
    throw new Error();
  }
};

const isEmpty: TIsEmpty = (line) => {
  if (!line || line === EMPTY_JSON) {
    throw new Error(ERROR_MESSAGES.EMPTY_JSON);
  }
};

export const validatePackagesTerm: TValidatePackagesTerm = async (
  packagesTerm,
) => {
  isEmpty(packagesTerm);
  try {
    const json = JSON.parse(packagesTerm);
    isArray(json);
  } catch {
    throw new Error(ERROR_MESSAGES.NOT_A_JSON);
  }
};

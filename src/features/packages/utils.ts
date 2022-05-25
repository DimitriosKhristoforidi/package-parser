import { TGetPackagesData, TValidatePackagesTerm } from './packagesSliceTypes';
import { EMPTY_JSON, ERROR_MESSAGES } from './constants';
import API from '../../API';

export const getPackagesData: TGetPackagesData = async (dependenciesList) => {
  const promises = dependenciesList.map((dep) => API.getPackage(dep));

  return await Promise.all(promises).then((res) =>
    res.map((item) => item.results[0].package),
  );
};

export const validatePackagesTerm: TValidatePackagesTerm = async (
  packagesTerm,
) => {
  if (!packagesTerm || packagesTerm === EMPTY_JSON) {
    throw new Error(ERROR_MESSAGES.EMPTY_JSON);
  }
  try {
    JSON.parse(packagesTerm);
  } catch {
    throw new Error(ERROR_MESSAGES.NOT_A_JSON);
  }
};

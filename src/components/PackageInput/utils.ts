import API from '../../API';
import { Modal } from 'antd';
import { TGetPackagesData } from './PackageInputTypes';

export const getPackagesData: TGetPackagesData = async (dependenciesList) => {
  if (!dependenciesList.length) {
    Modal.error({ title: 'JSON is empty' });
    return [];
  }

  const promises = dependenciesList.map((dep) => API.getPackage(dep));

  return await Promise.all(promises).then((res) =>
    res.map((item) => item.results[0].package),
  );
};

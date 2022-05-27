export type IPackageFormFields = {
  [key: string]: string;
};

export type IPackageFormInputs = {
  [key: string]: { name: string; placeholder: string; testId: string };
};

export type TOnFinish = (e: IPackageFormFields) => void;
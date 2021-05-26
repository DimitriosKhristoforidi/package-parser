export const updatePackage = (payload) => ({
  type: 'updatePackage',
  payload,
});

export const clearPackage = () => ({
  type: 'clearPackage',
});

export const setLoading = (payload) => ({
  type: 'setLoading',
  payload
});

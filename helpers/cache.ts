import AsyncStorage from '@react-native-async-storage/async-storage';

export const getCacheByKey = async (keyCache: string) => {
  const _data = await AsyncStorage.getItem(keyCache);
  if (_data) {
    return JSON.parse(_data);
  }
  return null;
};

export const setCacheByKey = async (keyCache: string, dataCache: any) => {
  await AsyncStorage.setItem(keyCache, JSON.stringify(dataCache));
};

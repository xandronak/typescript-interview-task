import httpClient from '~/httpClient';
import {API} from '~/constants/api';
import {ItemData} from '~/types/userItems.types';

const getUserItems = async (userId?: string): Promise<Array<ItemData>> => {
  const {data} = await httpClient.fetch(API.Items, {
    params: {userId}
  });
  return data.items;
};

export default getUserItems;

import httpClient from '~/httpClient';
import {API} from '~/constants/api';
import {UpdateItemData} from '~/types/userItems.types';

const updateItem = (item: UpdateItemData) => (
  httpClient.fetch(API.Items, {
    method: 'POST',
    body: item,
    headers: {
      'Content-Type': 'application/json',
    }
  })
);

export default updateItem;
import itemManager from '../itemManager';

const testPassword = 'Password123321';

describe('itemManager', () => {
  test('should return items list', () => {
    expect(itemManager.getItems().length).toBeGreaterThan(0);
  });

  test('should return items list with meta data', () => {
    const items = itemManager.getItems();

    expect(items[0].isPasswordOld).not.toBeUndefined();
    expect(items[0].isPasswordReused).not.toBeUndefined();
    expect(items[0].isPasswordWeak).not.toBeUndefined();
  });

  test('should update item by id in items list', () => {
    const items = [...itemManager.getItems()];
    expect(items).toEqual(itemManager.getItems());

    itemManager.updateItemPasswordById(items[1].id, testPassword);
    expect(items).not.toEqual(itemManager.getItems());
  });
});

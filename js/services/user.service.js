import { storageService } from './storage.sevice.js';

export const userService = {
  query,
  updateUser,
};

const USER_STORAGE = 'userDB';

function query() {
  var user = storageService.load(USER_STORAGE);
  if (!user) {
    user = {
      fullName: 'Puki Ben David',
      activities: [
        { text: 'Edit todo', at: 1523873242735 },
        { text: 'Edit todo', at: 1523873242735 },
        { text: 'Edit todo', at: 1523873242735 },
      ],
      prefs: { color: 'black', bgColor: 'white' },
    };
    storageService.save(USER_STORAGE, user);
  }
  return user;
}

function updateUser(user) {
  storageService.save(USER_STORAGE, user);
}

export const actionTypes = {
  SHOW_NOTIFICATION: 'SHOW_NOTIFICATION',
  HIDE_NOTIFICATION: 'HIDE_NOTIFICATION',
};

export const showNotification = payload => ({
  type: actionTypes.SHOW_NOTIFICATION,
  payload,
});

export const hideNotification = payload => ({
  type: actionTypes.HIDE_NOTIFICATION,
  payload,
});

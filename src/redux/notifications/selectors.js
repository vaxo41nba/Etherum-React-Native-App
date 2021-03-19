import { createSelector } from 'reselect';

const getNotificationsState = state => state.notifications;

export const getNotificationMessage = createSelector(
  getNotificationsState,
  notifications => notifications.message,
);

export const getNotificationDisplay = createSelector(
  getNotificationsState,
  notifications => !!notifications.message,
);

export const getIsNotificationError = createSelector(
  getNotificationsState,
  notifications => notifications.isError,
);

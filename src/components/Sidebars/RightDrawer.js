import React from 'react';
import { View } from 'react-native';
import { DrawerLayout } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import RightSidebar from './Right';

export const rightDrawerRef = {};

export default function RightDrawer({
  children,
  navigateToScreens,
  logOut,
  GetAccounts,
}) {
  return (
    <DrawerLayout
      ref={drawer => {
        rightDrawerRef.ref = drawer;
      }}
      drawerWidth={300}
      keyboardDismissMode="on-drag"
      drawerPosition="right"
      drawerType="front"
      renderNavigationView={() => (
        <>
          <View style={{ marginBottom: Constants.statusBarHeight }} />
          <RightSidebar
            toggle={() => rightDrawerRef.ref.closeDrawer()}
            navigateToScreens={navigateToScreens}
            logOut={logOut}
            GetAccounts={GetAccounts}
          />
        </>
      )}
    >
      {children}
    </DrawerLayout>
  );
}

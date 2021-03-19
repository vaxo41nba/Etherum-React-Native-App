import React from 'react';
import { View } from 'react-native';
import { DrawerLayout } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import LeftSidebar from './Left';

export const leftDrawerRef = {};

export default function LeftDrawer({
  children,
  sidebarLogo,
  currentAcc,
  defName,
  defAddress,
}) {
  return (
    <DrawerLayout
      ref={drawer => {
        leftDrawerRef.ref = drawer;
      }}
      drawerWidth={300}
      keyboardDismissMode="on-drag"
      drawerPosition="left"
      drawerType="front"
      renderNavigationView={() => (
        <>
          <View style={{ marginBottom: Constants.statusBarHeight }} />
          <LeftSidebar
            logo={sidebarLogo}
            toggle={() => leftDrawerRef.ref.closeDrawer()}
            currentAcc={currentAcc}
            defName={defName}
            defAddress={defAddress}
          />
        </>
      )}
    >
      {children}
    </DrawerLayout>
  );
}

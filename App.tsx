import React, { useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Text,
  View,
} from 'react-native';


import usePushNotification from './notification';

type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App():JSX.Element{
    const {
      requestUserPermission,
      getFCMToken,
      listenToBackgroundNotifications,
      listenToForegroundNotifications,
      onNotificationOpenedAppFromBackground,
      onNotificationOpenedAppFromQuit,
    } = usePushNotification();
  
    useEffect(() => {
  
  
      const listenToNotifications = () => {
        try {
          getFCMToken();
          requestUserPermission();
          onNotificationOpenedAppFromQuit();
          listenToBackgroundNotifications();
          listenToForegroundNotifications();
          onNotificationOpenedAppFromBackground();
        } catch (error) {
          console.log(error);
        }
      };
  
      listenToNotifications();
    }, []);
  
    return (
      <View>
        <Text>Push Notification APP TESTING</Text>
      </View>
    );
  };
  
  export default App;
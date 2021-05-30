import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import Router from './router';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </QueryClientProvider>
  );
};
export default App;

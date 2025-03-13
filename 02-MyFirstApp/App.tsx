import { SafeAreaView } from 'react-native';
// import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen';
// import { CounterScreen } from './src/presentation/screens/CounterScreen';
import { PaperProvider } from 'react-native-paper';
// import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen';

import Icon from '@react-native-vector-icons/ionicons';
import { BoxObjectModelScreen } from './src/presentation/screens/BoxObjectModelScreen';

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <Icon { ...props } />
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* <HelloWorldScreen name="Ulises Rojas González" /> */}
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen /> */}
        <BoxObjectModelScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};

import { SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import Icon from '@react-native-vector-icons/ionicons';
// import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen';
// import { CounterScreen } from './src/presentation/screens/CounterScreen';
// import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen';
// import { BoxObjectModelScreen } from './src/presentation/screens/BoxObjectModelScreen';
import { DimensionScreen } from './src/presentation/screens/DimensionScreen';


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
        {/* <BoxObjectModelScreen /> */}
        {/* <BoxObjectModelScreen /> */}
        <DimensionScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};

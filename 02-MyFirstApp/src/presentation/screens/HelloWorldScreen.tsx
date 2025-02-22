import { StyleSheet, Text, View } from 'react-native';

export const HelloWorldScreen = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Hola Mundo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    fontSize: 45,
    padding: 20,
    textAlign: 'center',
  },
});

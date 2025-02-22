import { StyleSheet, Text, View } from 'react-native';

interface Props {
  name?: string;
}

export const HelloWorldScreen = ({ name = 'Mundo' } : Props) => {
  return (
    <View style={ styles.container }>
      <Text numberOfLines={1} ellipsizeMode="tail" style={ styles.title }>Hola, { name }</Text>
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

import { Platform, StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  centerContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    fontSize: 80,
    fontWeight: 300,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: Platform.OS === 'android' ? 15 : 0,
  },
});

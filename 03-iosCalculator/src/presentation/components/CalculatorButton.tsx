import {Pressable, Text} from 'react-native';
import {colors, styles} from '../../config/theme/app-theme';

interface Props {
  label: string;
  color?: string;
  columns?: number;
  blackText?: boolean;
  onPress: () => void;
}

export const CalculatorButton = ({
  label,
  color = colors.darkGray,
  columns = 1,
  blackText = false,
  onPress,
}: Props) => {
  return (
    <Pressable
      onPress={() => onPress()}
      style={({pressed}) => ({
        ...styles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width:
          styles.button.width * columns +
          styles.button.marginHorizontal * 2 * (columns - 1),
      })}>
      <Text
        style={{...styles.buttonText, color: blackText ? 'black' : 'white'}}>
        {label}
      </Text>
    </Pressable>
  );
};

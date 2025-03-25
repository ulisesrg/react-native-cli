import {Text, View} from 'react-native';
import {colors, styles} from '../../config/theme/app-theme';
import {CalculatorButton} from '../components/CalculatorButton';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    number,
    prevNumber,
    handleCharacterPress,
    handleDeletePress,
    handleClearPress,
    handleTogglePress,
    handleAddPress,
    handleSubtractPress,
    handleMultiplyPress,
    handleDividePress,
    handleEqualPress,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.mainResult}>
          {number}
        </Text>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.subResult}>
          {prevNumber}
        </Text>
      </View>

      <View style={styles.row}>
        <CalculatorButton
          onPress={handleClearPress}
          label="C"
          blackText
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={handleTogglePress}
          label="+/-"
          blackText
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={handleDeletePress}
          label="del"
          blackText
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={handleDividePress}
          label="÷"
          color={colors.orange}
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton onPress={() => handleCharacterPress('7')} label="7" />
        <CalculatorButton onPress={() => handleCharacterPress('8')} label="8" />
        <CalculatorButton onPress={() => handleCharacterPress('9')} label="9" />
        <CalculatorButton
          onPress={handleMultiplyPress}
          label="x"
          color={colors.orange}
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton onPress={() => handleCharacterPress('4')} label="4" />
        <CalculatorButton onPress={() => handleCharacterPress('5')} label="5" />
        <CalculatorButton onPress={() => handleCharacterPress('6')} label="6" />
        <CalculatorButton
          onPress={handleSubtractPress}
          label="-"
          color={colors.orange}
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton onPress={() => handleCharacterPress('1')} label="1" />
        <CalculatorButton onPress={() => handleCharacterPress('2')} label="2" />
        <CalculatorButton onPress={() => handleCharacterPress('3')} label="3" />
        <CalculatorButton
          onPress={handleAddPress}
          label="+"
          color={colors.orange}
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton
          onPress={() => handleCharacterPress('0')}
          label="0"
          columns={2}
        />
        <CalculatorButton onPress={() => handleCharacterPress('.')} label="." />
        <CalculatorButton
          onPress={handleEqualPress}
          label="="
          color={colors.orange}
        />
      </View>
    </View>
  );
};

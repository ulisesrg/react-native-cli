import {useState} from 'react';

export const useCalculator = () => {
  const [number, setNumber] = useState('0');

  const handleCharacterPress = (numberString: string) => {
    buildNumberString(numberString);
  };

  const buildNumberString: (numberString: string) => void = numberString => {
    if (numberString === '.') {
      if (number.includes('.')) {
        return;
      }
      return setNumber(number + numberString);
    }

    const isDecimalOrNegativeDecimal =
      number.startsWith('0.') || number.startsWith('-0.');
    const isZeroPrefixed = number.startsWith('0') || number.startsWith('-0');
    const isNegative = number.startsWith('-');

    if (isDecimalOrNegativeDecimal) {
      return setNumber(number + numberString);
    }

    if (isZeroPrefixed && numberString === '0') {
      return;
    } else if (isZeroPrefixed && isNegative) {
      return setNumber('-' + numberString);
    } else if (isZeroPrefixed) {
      return setNumber(numberString);
    }

    setNumber(number + numberString);

    // Otra forma
    /*
    if (numberString === '.') {
      if (number.includes('.')) {
        return;
      }
      return setNumber(number + numberString);
    }

    const isDecimalOrNegativeDecimal =  number.startsWith('0.') || number.startsWith('-0.');
    const isZeroPrefixed = number.startsWith('0') || number.startsWith('-0');

    // Caracter es 0
    if (numberString === '0') {
      if (isDecimalOrNegativeDecimal) {
        return setNumber(number + numberString);
      }
      if (isZeroPrefixed) {
        return;
      }
      return setNumber(number + numberString);
    }

    // Caracter es cualquier otro número
    if (isDecimalOrNegativeDecimal) {
      return setNumber(number + numberString);
    }
    if (isZeroPrefixed) {
      return setNumber(numberString);
    }

    setNumber(number + numberString);
     */
  };

  const handleDeletePress = () => {
    deleteLastCharacter();
  };

  const deleteLastCharacter: () => void = () => {
    let newNumber;
    const isUnit = number.length === 1;
    const isNegativeUnit = number.length === 2 && number.startsWith('-');

    if (isUnit || isNegativeUnit) {
      newNumber = '0';
    } else {
      newNumber = number.substring(0, number.length - 1);
    }

    setNumber(newNumber);
  };

  const handleClearPress = () => {
    setNumber('0');
  };

  const handleTogglePress = () => {
    toggleSign();
  };

  const toggleSign: () => void = () => {
    const isNegative = number.startsWith('-');

    if (isNegative) {
      return setNumber(number.replace('-', ''));
    }

    setNumber('-' + number);
  };

  return {
    // Properties
    number,

    // Methods
    handleCharacterPress,
    handleClearPress,
    handleDeletePress,
    handleTogglePress,
  };
};

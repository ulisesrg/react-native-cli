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

    const isDecimalOrNegativeDecimal =  number.startsWith('0.') || number.startsWith('-0.');
    const isZeroPrefixed = number.startsWith('0') || number.startsWith('-0');

    if (isDecimalOrNegativeDecimal) {
      return setNumber(number + numberString);
    }

    if (isZeroPrefixed && numberString === '0') {
      return;
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

  return {
    // Properties
    number,

    // Methods
    handleCharacterPress,
  };
};

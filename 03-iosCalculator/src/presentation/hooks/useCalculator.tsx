import {useEffect, useRef, useState} from 'react';

enum Operator {
  add = '+',
  subtract = '-',
  multiply = 'x',
  divide = '÷',
}

export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('');
  const [formula, setFormula] = useState('');

  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(' ').at(0);
      setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number]);

  useEffect(() => {
    const result = calculateResult();
    setPrevNumber(`${result}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formula]);


  const lastOperation = useRef<Operator>(undefined);

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

  const setLastNumber: () => void = () => {
    const result = calculateResult();
    setFormula(`${result}`);

    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }

    setNumber('0');
  };

  const handleAddPress = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };

  const handleSubtractPress = () => {
    setLastNumber();
    lastOperation.current = Operator.subtract;
  };

  const handleMultiplyPress = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };

  const handleDividePress = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
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
    setPrevNumber('');
    lastOperation.current = undefined;
    setFormula('');
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

  const handleEqualPress = () => {
    const result = calculateResult();
    setFormula(`${result}`);
    lastOperation.current = undefined;
    setPrevNumber('');
  };

  const calculateResult: () => number = () => {
    const [firstValue, operation, secondValue] = formula.split(' ');

    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if (isNaN(num2)) {
      return num1;
    }

    switch (operation) {
      case Operator.add:
        return num1 + num2;

      case Operator.subtract:
        return num1 - num2;

      case Operator.multiply:
        return num1 * num2;

      case Operator.divide:
        return num1 / num2;

      default:
        throw new Error('Operation not implemented');
    }
  };

  return {
    // Properties
    number,
    prevNumber,
    formula,

    // Methods
    handleCharacterPress,
    handleClearPress,
    handleDeletePress,
    handleTogglePress,
    handleAddPress,
    handleSubtractPress,
    handleMultiplyPress,
    handleDividePress,
    handleEqualPress,
  };
};

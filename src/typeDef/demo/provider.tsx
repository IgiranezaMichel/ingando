/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {UpliftingContext} from './context';

interface UpliftingProviderProps {
  children: React.ReactNode;
}

export const UpliftingProvider: React.FC<UpliftingProviderProps> = ({
  children,
}) => {
  const upliftingMessage = 'You are capable of amazing things! Keep going! 🚀';
  const [message, setMessage] = useState(upliftingMessage);

  const updateMessage = (newMessage: string) => {
    setMessage(newMessage);
  };

  return (
    <UpliftingContext.Provider value={{message, updateMessage}}>
      {children}
    </UpliftingContext.Provider>
  );
};

import React, { createContext, useContext, useState } from 'react';

const PasskeyContext = createContext();

export const PasskeyProvider = ({ children }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const verifyPasskey = (key) => {
    if (key === 'rakib226') {
      setIsUnlocked(true);
      localStorage.setItem('passkey_unlocked', 'true');
      setShowModal(false);
      return true;
    }
    return false;
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  React.useEffect(() => {
    const saved = localStorage.getItem('passkey_unlocked');
    if (saved === 'true') {
      setIsUnlocked(true);
    }
  }, []);

  return (
    <PasskeyContext.Provider value={{ isUnlocked, showModal, verifyPasskey, openModal, closeModal }}>
      {children}
    </PasskeyContext.Provider>
  );
};

export const usePasskey = () => {
  const context = useContext(PasskeyContext);
  if (!context) {
    throw new Error('usePasskey must be used within PasskeyProvider');
  }
  return context;
};

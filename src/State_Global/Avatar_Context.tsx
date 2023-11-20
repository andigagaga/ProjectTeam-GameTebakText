import React, { createContext, useContext, useState } from 'react';

interface AvatarType {
    AvatarType: string;
}

const AvatarContext = createContext<{ selectedAvatar: AvatarType | null; setAvatar: (avatar: AvatarType) => void }>({
  selectedAvatar: null,
  setAvatar: () => {},
});

export const AvatarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedAvatar, setSelectedAvatar] = useState<AvatarType | null>(null);

  const setAvatar = (avatar: AvatarType) => {
    setSelectedAvatar(avatar);
  };

  return (
    <AvatarContext.Provider value={{ selectedAvatar, setAvatar }}>
      {children}
    </AvatarContext.Provider>
  );
};

export const useAvatar = () => {
  return useContext(AvatarContext);
};

import React, { useState } from 'react';

export const AccountContext = React.createContext();

export function AccountProvider({ children }) {
  const [accountList, setAccountList] = useState(['admin', 'support', 'moderator']);

  const handleDelete = (accountToDelete) => {
    setAccountList(accountList.filter(account => account !== accountToDelete));
  };

  const handleAdd = (accountToAdd) => {
    if (!accountList.includes(accountToAdd)) {
      setAccountList([...accountList, accountToAdd]);
    }
  };

  return (
    <AccountContext.Provider value={{ accountList, handleDelete, handleAdd }}>
      {children}
    </AccountContext.Provider>
  );
}

export default AccountContext;
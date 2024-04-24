import React, { useState } from 'react';

export const AccountContext = React.createContext();

export function AccountProvider({ children }) {
  const [accountList, setAccountList] = useState(['admin', 'support', 'moderator']);
  const [supportTickets, setSupportTickets] = useState({admin: [{title: "test title", body: "test body"}, {title: 'test title2', body: "test body 2"}], support: [{}], moderator: [{}]});

  const handleDelete = (accountToDelete) => {
    setAccountList(accountList.filter(account => account !== accountToDelete));
  };

  const handleAdd = (accountToAdd) => {
    if (!accountList.includes(accountToAdd)) {
      setAccountList([...accountList, accountToAdd]);
    }
  };

  const handleSupportAdd = (supportTicketObject, account) => {
    setSupportTickets(prevSupportTickets => ({
      ...prevSupportTickets,
      [account]: [...prevSupportTickets[account], supportTicketObject]
    }));
  };
  

  return (
    <AccountContext.Provider value={{ accountList, handleDelete, handleAdd , supportTickets, handleSupportAdd}}>
      {children}
    </AccountContext.Provider>
  );
}

export default AccountContext;
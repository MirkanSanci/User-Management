import React, { useState } from 'react';
import UserForm from '../components/UserForm';
import UserTable from '../components/UserTable';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);
  const [roleFilter, setRoleFilter] = useState('');
  const [nextUserId, setNextUserId] = useState(1);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setUserToEdit(null);
    setOpen(false);
  };

  const saveUser = (user) => {
    setUsers((prev) => {
      const existingUser = prev.find((u) => u.id === user.id);
      if (existingUser) {
        return prev.map((u) => (u.id === user.id ? user : u));
      } else {
        return [...prev, { ...user, id: nextUserId }];
      }
    });
    if (!user.id) {
      setNextUserId((prevId) => prevId + 1);
    }
  };

  const editUser = (user) => {
    setUserToEdit(user);
    handleOpen();
  };

  const deleteUser = (username) => {
    setUsers((prev) => prev.filter((user) => user.username !== username));
  };

  return (
    <div>
      <UserTable
        users={users}
        editUser={editUser}
        deleteUser={deleteUser}
        setRoleFilter={setRoleFilter}
        roleFilter={roleFilter}
      />
      <UserForm open={open} handleClose={handleClose} saveUser={saveUser} userToEdit={userToEdit} />
    </div>
  );
};

export default UserManagement;

import React, { useState, useEffect } from 'react';
import { Modal, Box, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const avatars = [
  'https://i.pravatar.cc/150?img=1',
  'https://i.pravatar.cc/150?img=2',
  'https://i.pravatar.cc/150?img=3',
  'https://i.pravatar.cc/150?img=4',
  'https://i.pravatar.cc/150?img=5',
  'https://i.pravatar.cc/150?img=6',
];

const UserForm = ({ open, handleClose, saveUser, userToEdit }) => {
  const initialUserState = {
    fullName: '',
    username: '',
    email: '',
    role: '',
    avatar: '',
  };

  const [user, setUser] = useState(initialUserState);

  useEffect(() => {
    if (userToEdit) {
      setUser(userToEdit);
    } else {
      setUser(initialUserState);
    }
  }, [userToEdit]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    saveUser(user);
    setUser(initialUserState); // Formu sıfırlama
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ ...modalStyle, width: 400 }}>
        <h2>{userToEdit ? 'Edit User' : 'Create User'}</h2>
        <TextField label="Full Name" name="fullName" value={user.fullName} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Username" name="username" value={user.username} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Email" name="email" value={user.email} onChange={handleChange} fullWidth margin="normal" />
        <FormControl fullWidth margin="normal">
          <InputLabel>Role</InputLabel>
          <Select name="role" value={user.role} onChange={handleChange}>
            <MenuItem value="Contributor">Contributor</MenuItem>
            <MenuItem value="Author">Author</MenuItem>
            <MenuItem value="Administrator">Administrator</MenuItem>
            <MenuItem value="Subscriber">Subscriber</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel>Avatar</InputLabel>
          <Select name="avatar" value={user.avatar} onChange={handleChange}>
            {avatars.map((url, index) => (
              <MenuItem key={index} value={url}>
                <img src={url} alt={`avatar${index + 1}`} style={{ width: 40, height: 40, marginRight: 8 }} />
                Avatar {index + 1}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" onClick={handleSave} sx={{ mt: 2 }}>
          Save
        </Button>
      </Box>
    </Modal>
  );
};

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default UserForm;

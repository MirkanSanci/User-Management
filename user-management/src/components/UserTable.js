import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Tabs, Tab, Box, TextField, TablePagination, Checkbox, Tooltip,Button } from '@mui/material';
import { Edit, Delete, DeleteSweep } from '@mui/icons-material';

const UserTable = ({ users, editUser, deleteUser, setRoleFilter, roleFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleTabChange = (event, newValue) => {
    setRoleFilter(newValue);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeCheckbox = (username) => {
    if (selectedUsers.includes(username)) {
      setSelectedUsers((prev) => prev.filter((u) => u !== username));
    } else {
      setSelectedUsers((prev) => [...prev, username]);
    }
  };

  const handleDeleteAll = () => {
    if (window.confirm("Tüm kullanıcıları silmek istediğinizden emin misiniz?")) {
      users.forEach((user) => deleteUser(user.username));
    }
  };

  const handleDeleteSelected = () => {
    if (window.confirm("Seçili kullanıcıları silmek istediğinizden emin misiniz?")) {
      selectedUsers.forEach((username) => deleteUser(username));
      setSelectedUsers([]);
    }
  };

  const filteredUsers = users
    .filter((user) => (roleFilter ? user.role === roleFilter : true))
    .filter((user) => user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                     user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                     user.email.toLowerCase().includes(searchTerm.toLowerCase()));

  const paginatedUsers = filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Box>
      <Tabs value={roleFilter} onChange={handleTabChange} centered>
        <Tab label="All Users" value="" />
        <Tab label="Contributor" value="Contributor" />
        <Tab label="Author" value="Author" />
        <Tab label="Administrator" value="Administrator" />
        <Tab label="Subscriber" value="Subscriber" />
      </Tabs>
      <TextField
        label="Search"
        value={searchTerm}
        onChange={handleSearchChange}
        fullWidth
        margin="normal"
      />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <Tooltip title="Seçili Kullanıcıları Sil">
          <IconButton color="error" onClick={handleDeleteSelected}>
            <DeleteSweep sx={{ fontSize: 40 }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Tüm Kullanıcıları Sil">
          <IconButton color="primary" onClick={handleDeleteAll}>
            <Delete sx={{ fontSize: 40 }} />
          </IconButton>
        </Tooltip>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Select</TableCell>
              <TableCell>Avatar</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedUsers.map((user) => (
              <TableRow key={user.username}>
                <TableCell>
                  <Checkbox
                    checked={selectedUsers.includes(user.username)}
                    onChange={() => handleChangeCheckbox(user.username)}
                  />
                </TableCell>
                <TableCell>
                  <img src={user.avatar} alt="avatar" style={{ width: 40, height: 40 }} />
                </TableCell>
                <TableCell>{user.fullName}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <IconButton onClick={() => editUser(user)}>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => deleteUser(user.username)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={filteredUsers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Button variant="contained" color="primary" onClick={() => editUser(null)} sx={{ mt: 2 }}>
        Add New User
      </Button>
    </Box>
  );
};

export default UserTable;

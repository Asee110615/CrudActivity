import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const mockData = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' },
];

const CrudExample = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    setData(mockData);
  }, []);

  const handleCreate = () => {
    const newData = [...data, { id: data.length + 1, name }];
    setData(newData);
    setName('');
  };

  const handleUpdate = (id, newName) => {
    const updatedData = data.map(item =>
      item.id === id ? { ...item, name: newName } : item
    );
    setData(updatedData);
  };

  const handleDelete = id => {
    const filteredData = data.filter(item => item.id !== id);
    setData(filteredData);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mt: 2 }}>
        <TextField label="Name" value={name} onChange={e => setName(e.target.value)} />
        <Button variant="contained" onClick={handleCreate}>
          Create
        </Button>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2 }}>
        {data.map(item => (
          <Box key={item.id} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mb: 1 }}>
            <TextField
              label="Name"
              value={item.name}
              onChange={e => handleUpdate(item.id, e.target.value)}
            />
            <Button variant="contained" onClick={() => handleDelete(item.id)}>
              Delete
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CrudExample;

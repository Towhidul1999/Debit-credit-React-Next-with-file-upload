import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/Payment.module.css'


const Payment = () =>{
    const [type, setType] = useState('');
    const [userName, setUserName] = useState('');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [note, setNote] = useState('');
    const [file, setFile] = useState(null);
    const [reference, setReference] = useState(null);
  
    const handleSubmit = async(event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append('type', type);
      formData.append('userName', userName);
      formData.append('title', title);
      formData.append('amount', amount);
      formData.append('date', date);
      formData.append('note', note);
      formData.append('file', file);
      formData.append('reference', reference);
  
      try {
        const response = await axios.post('http://127.0.0.1:8001/api/payment', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log(response.data);
      } catch (error) {
        console.error(error.response.data);
      }
    };
  
    const handleuserName = (event) => {
        setUserName(event.target.value);
    };

    const handleTitle = (event) => {
        setTitle(event.target.value);
    }

    const handleDate = (event) => {
        setDate(event.target.value)
    }

    const handleAmount = (event) => {
        setAmount(event.target.value);
    }

    const handleNote = (event) => {
        setNote(event.target.value);
    }
  
    const handleImage = (event) => {
        setFile(event.target.files[0]);
      console.log(event.target.files[0]);
    };

    const handleType = (event) => {
        setType(event.target.value)
        console.log(event.target.value);
    }

    const handleReference = (event) => {
        setReference(event.target.value)
        console.log(event.target.value);
    }
    
    return (
        <div className={styles.div}>
        <form onSubmit={handleSubmit}>
        <Box sx={{ minWidth: 120 }}>
         <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Payment</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label="Payment"
            onChange={handleType}
          >
            <MenuItem value="Cash In">Cash In</MenuItem>
            <MenuItem value="Cash Out">Cash Out</MenuItem>
          </Select>
         </FormControl>
         
      </Box>
      <TextField id="outlined-basic" className={styles.field} label="User Name" variant="outlined" onChange={handleuserName}/>
      <TextField id="outlined-basic" className={styles.field} label="Title" variant="outlined" onChange={handleTitle}/>
      <TextField id="outlined-basic" className={styles.field} label="Amount" variant="outlined" onChange={handleAmount}/>
      <TextField id="outlined-basic" className={styles.field} label="Date" variant="outlined" onChange={handleDate}/>
      <TextField id="outlined-basic" className={styles.field} label="Note" variant="outlined" onChange={handleNote}/>
      <TextField id="outlined-basic" className={styles.field} label="Reference" variant="outlined" onChange={handleReference}/>
      <TextField id="outlined-basic" className={styles.field} label="Image" variant="outlined" name='file' type="file" onChange={handleImage}/>
      <TextField id="outlined-basic" className={styles.field} label="Submit" variant="outlined" type="submit"/>
      </form>
      </div>
    );
}

export default Payment;
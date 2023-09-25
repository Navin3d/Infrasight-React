import React from 'react'
import '../css/listdetailpage.css';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const email_obj = [
    {
        id: "1",
        email: "username@gmail.com",
    },
    {
        id:"2",
        email:"user02@gmail.com"
    }
]
const title_obj = [
    {
        id: "1",
        title: "Task 1",
    },
    {
        id:"2",
        title:"Task 2"
    }
]

const Listdetailpage = () => {
    const[IsEmail,setIsEmail]=React.useState(email_obj)
    const[IsTitle,setIsTitle]=React.useState(title_obj)
    // const emails = ['username@gmail.com', 'user02@gmail.com'];
    // const title = ['JAWAN', 'SHARUK'];
    const [shareopen, setShareOpen] = React.useState(false);
    const [formopen, setFormOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(email_obj[1]);

    const handleDeleteClick = (email) => {
        console.log('Deleted Email ID:', email.id);
      };
      
      const handletitleDeleteClick = (title) => {
        console.log('Deleted title ID:', title.id);
      };

      const clickopen = () => {
        setShareOpen(true);
      };
    
      const clickclose = (value) => {
        setShareOpen(false);
        setSelectedValue(value);
      };
      const submitopen = () => {
        setFormOpen(true);
      };
    
      const submitclose = (value) => {
        setFormOpen(false);
      
      };

    function SimpleDialog(props) {
      const { onClose, selectedValue, open } = props;
    
      const handleClose = () => {
        onClose(selectedValue);
      };
    
      const handleListItemClick = (value) => {
        console.log(value);
        onClose(value);

      };
    
      return (
        <Dialog onClose={handleClose} open={open}>
          <DialogTitle>Set backup account</DialogTitle>
          <List sx={{ pt: 0 }}>
            {email_obj.map((email) => (
              <ListItem disableGutters key={email.id}>
                <ListItemButton onClick={() => handleListItemClick(email.email)}>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={email.email} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disableGutters>
              <ListItemButton
                autoFocus
                onClick={() => handleListItemClick('addAccount')}
              >
                <ListItemAvatar>
                  <Avatar>
                    <AddIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Add account" />
              </ListItemButton>
            </ListItem>
          </List>
        </Dialog>
      );
    }
    
    SimpleDialog.propTypes = {
      onClose: PropTypes.func.isRequired,
      open: PropTypes.bool.isRequired,
      selectedValue: PropTypes.string.isRequired,
    };

    // FORM DIALOGUE BOX
    
  function FormDialog(props) {
    const { onClose, selectedValue, open } = props;
//   const [open, setOpen] = React.useState(false);

const handlesubmitClose = () => {
    onClose(selectedValue);
  };

  const handlesubmit = (value) => {
    console.log(value);
    onClose(value);

  };

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Dialog open={open} onClose={handlesubmitClose}>
        <DialogTitle>Check server</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
          />
            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Command"
            type="text"
            fullWidth
            variant="standard"
          />

    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Timeline</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Start of the day</MenuItem>
          <MenuItem value={20}>End of the day</MenuItem>
        </Select>
      </FormControl>
    </Box>

        </DialogContent>
        <DialogActions>
          <Button onClick={handlesubmitClose}>Cancel</Button>
          <Button onClick={handlesubmitClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
  
    return (
    <div>
        <div className="container">
        <div className="row">
            <h1 className='detail-title'>Server Detail Page</h1>
            <p className='detail-subtitle'>A detailed info of your server!</p>
        </div>
        <div className="listdetail-box">
        <div className="row">
            <div className="col-md-2"></div>
                <div id='partition-left' className="col-md-4">
                    <p>Name : Logasubramani sm</p>
                    <p>Description : This is a hr management server</p>
                </div>
                <div id='partition-right' className="col-md-4">
                    <p>Cost  : Rs. 93983</p>
                    <p>Uptime : 963 ms </p>
                </div>
                <div className="col-md-2"></div>
        </div>
        <div className="row">
            <div className="col-md-8"></div>
            <div className="col">
            <button className='detail-add-button' onClick={submitopen}>ADD</button>
            <FormDialog selectedValue={selectedValue}
            open={formopen}
            onClose={submitclose}
          />
            </div>
            <div className="col">
            <button className='detail-add-button' onClick={clickopen} >SHARE</button>
            <SimpleDialog
            selectedValue={selectedValue}
            open={shareopen} 
            onClose={clickclose}
          />
            </div>
            <div className="col"></div>
        </div>
        </div>
        </div>
        <div className="spacer"></div>

        {/* USER ACCESS  */}
        <div className="container">
        <div className="row">
          <h1 className='detail-title'>USER ACCESS</h1>
          <p className='detail-subtitle'>Analyze the users of the server</p>
        </div>
        <div className="listdetail-box">
          <div className="row">
            <div className="col-md-2"></div>
            <div id='partition-left' className="col-md-4">
              {email_obj.map((email) => (
                <div key={email.id}>
                  <p>{email.email}</p>
                </div>
              ))}
            </div>
            <div id='partition-right' className="col-md-4">
              {email_obj.map((email) => (
                <div key={email.id}>
                  <p>
                    <button
                      className='btn btn-danger'
                      onClick={() => handleDeleteClick(email)}
                    >
                      Delete
                    </button>
                  </p>
                </div>
              ))}
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
        <div className="spacer"></div>

        {/* PROJECT DETAILS */}
        <div className="container">
        <div className="row">
          <h1 className='detail-title'>Project Details</h1>
          <p className='detail-subtitle'>Analyze the projects in the serer</p>
        </div>
        <div className="listdetail-box">
          <div className="row">
            <div className="col-md-2"></div>
            <div id='partition-left' className="col-md-4">
              {title_obj.map((title) => (
                <div key={title.id}>
                  <p>{title.title}</p>
                </div>
              ))}
            </div>
            <div id='partition-right' className="col-md-4">
              {title_obj.map((title) => (
                <div key={title.id}>
                  <p>
                    <button
                      className='btn btn-danger'
                      onClick={() => handletitleDeleteClick(title)}
                    >
                      Delete
                    </button>
                  </p>
                </div>
              ))}
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
        <div className="spacer"></div>
    </div>
  )
}

export default Listdetailpage
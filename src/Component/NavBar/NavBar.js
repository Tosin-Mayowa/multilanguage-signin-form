import React,{Component} from 'react';
import {ThemeContext} from '../ContextFolder/ThemeContext';
import {Paper,AppBar,FormGroup ,FormControlLabel,Toolbar,Typography,Switch,IconButton} from '@mui/material';
export default class NavBar extends Component{
    static contextType=ThemeContext;
    render(){
        const {isDarkMode,toggleMode}=this.context;
return (
<Paper>
<AppBar position='static' color='primary' style={{ height: '64px' }}>
<Toolbar>
<Typography color='inherit'>
Sign Up Form
</Typography>
<IconButton>
  <FormGroup sx={{ color:'white' }}>
        <FormControlLabel
        
          control={
            <Switch
              checked={isDarkMode}
              onClick={toggleMode}
              aria-label="switch"
            />
          }
          label={isDarkMode ? 'DarKMode' : 'Normal'}
        />
      </FormGroup>
</IconButton>
</Toolbar>
</AppBar>
</Paper>
)
    }
}
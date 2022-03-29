import React,{Component} from 'react';
import LockIcon from '@mui/icons-material/Lock';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import {LanguageContext} from '../ContextFolder/LanguageContext';
const lang={
  english:{
    email: 'Email', passWord:'Password', signIn: 'sign in'
  },

  french:{
    email: 'l\'email', passWord:'les mot de passe', signIn: 's\'identifier'
  },

  spanish:{
    email: 'el correo', passWord:'la contrasena', signIn: 'registrarse'
  }

 
};
export default class Form extends Component{
static contextType=LanguageContext;
    render(){
      const {language, changeLanguage}=this.context;
const {email,passWord,signIn}=lang[language]
        return(
<Grid container style={{ justifyContent:'center', marginTop:'1rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <Paper style={{ paddingTop:'5px', height:'400px', textAlign:'center' }}>
          <Typography>{signIn} </Typography>
          <Avatar style={{margin: '20px auto', backgroundColor: 'red' }}>
          <LockIcon sx={{ color:'white' }} />
          </Avatar>
          <FormControl >
        <Select
        sx={{ textAlign:'center' }}
          value={language}
          
          onChange={changeLanguage}
        >
          <MenuItem value='english'>English</MenuItem>
          <MenuItem value='spanish'>Spanish</MenuItem>
          <MenuItem value='french'>French</MenuItem>
          
        </Select>
      </FormControl>
<form >
<TextField id="standard-basic" sx={{ marginTop: '10px', marginLeft:'10px', width:'85%' }} label={email} variant="standard" />
      <TextField id="standard-basic" label={passWord} variant="standard" sx={{ marginTop: '20px', marginLeft:'10px', width:'85%' }} />
      <Button variant="contained" sx={{ marginTop: '20px', width:'85%' }}>{signIn}</Button>
</form>
          </Paper>
        </Grid>
        </Grid>
        )
    }
}
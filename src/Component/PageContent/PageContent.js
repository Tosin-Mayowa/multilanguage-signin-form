import React,{Component} from 'react';
import Paper from '@mui/material/Paper';
import {ThemeContext} from '../ContextFolder/ThemeContext';
export default class PageContent extends Component {
static contextType=ThemeContext;

    render(){
const {isDarkMode} = this.context;
        return(
            <Paper sx={{ width: '100vw', height:'100vh', backgroundColor:isDarkMode ? '#03312E':'white' }}>
            {this.props.children}
            </Paper>
        )
    }
}
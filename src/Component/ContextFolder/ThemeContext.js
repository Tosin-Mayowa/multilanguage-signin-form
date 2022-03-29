import React,{Component,createContext} from 'react';
export const ThemeContext= createContext();
export class ThemeProvider extends Component{
    constructor(props){
        super(props);
        this.state={
            isDarkMode:false
        };
        this.toggleMode=this.toggleMode.bind(this);
    }

    toggleMode(){
        this.setState((prev)=>({
            isDarkMode: !prev.isDarkMode
        }))
    }

    render(){
        return(
            <ThemeContext.Provider value={{ ...this.state,toggleMode:this.toggleMode }}>
            {this.props.children}
            </ThemeContext.Provider>
        )
    }



}
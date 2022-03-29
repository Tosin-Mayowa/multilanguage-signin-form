import React,{Component} from 'react';
import {ThemeProvider} from './Component/ContextFolder/ThemeContext';
import Form from './Component/Form/Form';
import NavBar from './Component/NavBar/NavBar';
import PageContent from './Component/PageContent/PageContent';
import {LanguageProvider} from './Component/ContextFolder/LanguageContext'
class App extends Component {
  render(){
    return(
<LanguageProvider>
<ThemeProvider>
<PageContent>
<NavBar/>
<Form/>
</PageContent>
</ThemeProvider>
</LanguageProvider>

    )
  }
}

export default App;

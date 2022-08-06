import React, {createContext} from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component{
    state = {
        isDarkTheme: true,
        darkTheme:{
            text:'#F5F5F5',
            background:'#202020' 
        },
        lightTheme:{
            text:'#101010',
            background:'#F3E5AB'
        }
    }; 
    
    changeTheme = () => {
      this.setState({ isDarkTheme: !this.state.isDarkTheme});
    };

    render(){
        return(
            <ThemeContext.Provider value={{...this.state, changeTheme:this.changeTheme}}>
                {this.props.children}
            </ThemeContext.Provider>

        );
    }
}

export default ThemeContextProvider;
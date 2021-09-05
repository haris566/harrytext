
import TextForms from './TextForms';
import NavBar from './NavBar';
import React, { useState } from 'react'
import Alert from './Alert';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";



// import About from './About';

const App = () => {
    const [mode, setmode] = useState('light');
    const toggleMode = () =>{
       if(mode==='light'){
           setmode('dark');
           document.body.style.backgroundColor = 'grey';
           showAlert("Dark mode has been enable", "success")
           document.title=("TextUtils-Dark Mode");
    //        setInterval(() => {
    //         document.title=("TextUtils is Amazing")
    //     }, 2000);
    //     setInterval(() => {
    //      document.title=("Install TextUtils Now")
    //  }, 1500);
       }
       else{

           setmode('light')
           document.body.style.backgroundColor = 'white';
           showAlert("Light mode has been enable", "success")
           document.title=("TextUtils-Light Mode");
           
       }
    }
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) =>{
        setAlert(
            {
                msg: message,
                type:type
            }
            
        )
        setTimeout(() => {
            setAlert(null);
        }, 2500);
    }
    return (
        <>
        {/* <Router> */}
           <NavBar mode={mode} toggleMode={toggleMode}    />
           <Alert alert={alert} / >
           <div className="container my-3">
           {/* <Switch> */}
             {/* <Route exact path="/About"> */}
                 {/* <About/> */}
             {/* </Route> */}
              {/* <Route exact path="/"> */}
              <TextForms showAlert={showAlert} heading="Enter the text you want to analyze below" mode={mode} />
              {/* </Route> */}



           {/* </Switch> */}
          
           
           
             
           </div>
           {/* </Router> */}
        </>
    )
}
export default App;

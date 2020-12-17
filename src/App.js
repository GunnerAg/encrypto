import React, {useEffect,useState} from 'react';
import background from "./image/bckgrnd.jpg";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import NavBar from './components/NavBar';
import {Route, Switch, withRouter} from 'react-router-dom';
import MessageDecrypt from './components/MessageDecrypt';
import MessageEncrypt from './components/MessageEncrypt'
import MessageDisplay from './components/MessageDisplay'
var CryptoJS = require("crypto-js");

let imageBg ={
  backgroundImage: `url(${background})`,
  width: "100vw",
  height: "100vh",
  backgroundSize:'cover',
  backgroundRepeat:'no-repeat',
  backgroundPosition: 'top center'
}

function App(props) {

  let[messageDisplay,setMessageToDisplay]=useState('');

  useEffect(()=>{
    setMessageToDisplay()
  },[])



  let handleEncrypt=(message,key)=>{
    console.log(key.key)
    let encryptedMessage = CryptoJS.AES.encrypt(message.message, key.key).toString();
    setMessageToDisplay(messageDisplay=encryptedMessage)
    console.log(encryptedMessage)
    props.history.push("/solution")
  }

  let handleDecrypt=(encryptedMessage,key)=>{
    var bytes  = CryptoJS.AES.decrypt(encryptedMessage.message, key.key);
    var decryptedMessage = bytes.toString(CryptoJS.enc.Utf8);
    setMessageToDisplay(messageDisplay=decryptedMessage)
    props.history.push("/solution")
  }
  

  return (
  <div style={imageBg}>
    <NavBar/>
    <Switch>
      <Route path="/message-encrypt" render={(routeProps)=>{
        return <MessageEncrypt onEncrypt={handleEncrypt} {...routeProps}/>
      }}/>
       <Route path="/message-decrypt" render={(routeProps)=>{
        return <MessageDecrypt onDecrypt={handleDecrypt} {...routeProps}/>
      }}/>
        <Route path="/solution" render={(routeProps)=>{
        return <MessageDisplay messageDisplay={messageDisplay} {...routeProps}/>
      }}/>
    </Switch>
  </div>
  );
}

export default withRouter(App)

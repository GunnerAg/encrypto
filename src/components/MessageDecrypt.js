import React, {useState} from 'react'
import {Form, Button,InputGroup} from 'react-bootstrap'
import './MessageEncrypt.css';


export default function MessageEncrypt(props) {

    let [encryptedMessage,setMessage]=useState('')
    let [key,setKey]=useState("")

    let handleMessageChange = (e) =>{
        e.preventDefault()
        let updatedMessage = {...encryptedMessage}
        updatedMessage.message = e.currentTarget.value
        setMessage (encryptedMessage = updatedMessage)
    }

    let handleKeyChange = (e) =>{
        e.preventDefault()
        let updatedKey = {...key}
        updatedKey.key = e.currentTarget.value
        setKey (key = updatedKey)
    }

    return (
        <div id='messageContainer'>

        <Form onSubmit={()=>props.onDecrypt(encryptedMessage,key)} >
        <div className="container">
            <Form.Group controlId="formBasicMessage" className="justify-content-md-center">
                <Form.Label className="labelText" >Message</Form.Label>
                
                <InputGroup >
                    <Form.Control onChange={handleMessageChange} name="message" type="text" as="textarea" aria-label="With textarea" value={encryptedMessage.message}/>
                </InputGroup>

                <Form.Group controlId="formBasicText">
                    <br></br>   
                    <Form.Control onChange={handleKeyChange} type="text" placeholder="A unique key to decrypt the message" name="key" value={key.key}/>
                        <Form.Text className="mutedText">
                        </Form.Text>
                </Form.Group>
            
                <Form.Text className="mutedText">
                Encryptor v-1.0
                </Form.Text>
            </Form.Group>
            </div>
            <div className="btnContainer">
            <Button className="btnStyle" type="submit">
                Decrypt
            </Button>
            </div>
        </Form>
    
        </div>
    )
}
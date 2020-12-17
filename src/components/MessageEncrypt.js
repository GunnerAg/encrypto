import React, {useState} from 'react'
import {Form, Button,InputGroup,FormControl, CardColumns} from 'react-bootstrap'
import './MessageEncrypt.css';


export default function MessageEncrypt(props) {

    let [message,setMessage]=useState("")
    let [key,setKey]=useState("")


    let handleMessageChange = (e) =>{
        e.preventDefault()
        let updatedMessage = {...message}
        updatedMessage.message = e.currentTarget.value
        setMessage (message = updatedMessage)
    }

    let handleKeyChange = (e) =>{
        e.preventDefault()
        let updatedKey = {...key}
        updatedKey.key = e.currentTarget.value
        setKey (key = updatedKey)
    }

    let fontclrchanger={
        color: 'white',
    }

    
    return (
        <div>
           
            <Form onSubmit={()=>props.onEncrypt(message,key)} >
            <div className="container">
                <Form.Group  className="justify-content-md-center" >
                    <Form.Label className="labelText" >Message</Form.Label>
                    
                
                    <InputGroup  >
                        <FormControl onChange={handleMessageChange} name="message" type="text" as="textarea" aria-label="With textarea" value={message.message}/>
                    </InputGroup>

                    <Form.Group controlId="formBasicText" >
                        <br></br>
                        <Form.Control onChange={handleKeyChange} type="text" placeholder="A unique key to encrypt the message" name="key" value={key.key}/>
                    </Form.Group>


                    <Form.Text className="mutedText" >
                    Encryptor v 1.0
                    </Form.Text>
                </Form.Group>
                </div>
                <Button className="btnStyle" type="submit" >
                    Encrypt
                </Button>
            </Form>
            
        </div>
    )
}

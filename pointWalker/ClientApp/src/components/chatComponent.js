import React, { useState,useEffect } from 'react';
import {HubConnectionBuilder}  from "@aspnet/signalr"
import {addPoint} from "./redux/actions";
import {connect} from "react-redux";

const Chat =({points,addPoint})=> {
    const [messages,setMessages]=useState([...points])
    const [nick,setNick]=useState('qwee')
    const [message,setMessage]=useState('')
    const [currentHubConnection,setCurrentHubconnection]=useState(null)

    useEffect(()=>{
     const connection=new HubConnectionBuilder()
            .withUrl('/pointchat')
            .build()
        console.log("Создан хаб")

        setCurrentHubconnection(connection)

    },[])

    useEffect(()=>{
        setNick(window.prompt('Your name:', 'John'))
    },[])

    useEffect(()=>{
        setMessages([...points])
    },[points])

    useEffect(()=> {
        try {
            if (currentHubConnection) {
                currentHubConnection
                    .start()
                    .then(() => console.log('Connection started!'))
                    .catch(err => console.log('Error while establishing connection :('))

                currentHubConnection.on('sendToAll', (receivedMessage) => {
                  if(!points.find(x=>x.id===receivedMessage.point.id)){
                      const {xPos,yPos}=receivedMessage
                      setMessages([...messages,receivedMessage])
                      addPoint({xPos,yPos})
                  }
                })
            }
        } catch (e) {
            console.log("Хаб не готов")
        }
    },[currentHubConnection])

    const sendMessage = () => {
        const point = {user:nick,xPos: 111, yPos: 222}
        currentHubConnection
            .invoke('sendToAll', point)
            .catch(err => console.error(err));
        setMessage('');
    };

        return (
            <div>
                <br />
                <input
                    type="text"
                    value={message}
                    onChange={e => setMessage( e.target.value)}
                />

                <button onClick={sendMessage}>Send</button>

                <div>
                    {messages.map((message, index) => (
                        <span style={{display: 'block'}} key={index}> {JSON.stringify(message)  } </span>
                    ))}
                </div>
            </div>
        )
    }

const mapStateToProps = (state) => {
    const { points } = state.points
    return { points}
};

const mapDispatchToProps = {
    addPoint,
};

export default connect(mapStateToProps,mapDispatchToProps)(Chat);

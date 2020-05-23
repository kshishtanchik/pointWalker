import {useState,useEffect} from 'react'
import {HubConnectionBuilder} from "@aspnet/signalr"

export const useSignalR=(onReciveMessage,)=>{
    const [currentHubConnection,setCurrentHubconnection]=useState(null)
    useEffect(()=>{
        const connection=new HubConnectionBuilder()
            .withUrl('/pointchat')
            .build()
        console.log("Создан хаб")
        setCurrentHubconnection(connection)

    },[])

    useEffect(()=> {
        try {
            if (currentHubConnection) {
                currentHubConnection
                    .start()
                    .then(() => console.log('Подключение установлено!'))
                    .catch(err => console.log('Что-то пошло не так при подключении:('))

                currentHubConnection.on('sendToAll', (receivedMessage) => {
                    onReciveMessage(receivedMessage)
                    })
            }
        } catch (e) {
            console.log("Хаб не готов")
        }
    },[currentHubConnection])

    const sendMessageToAll=(message)=>{
        currentHubConnection
        .invoke('sendToAll', message)
        .catch(err => console.error(err));
    }

    return {sendMessageToAll}
}

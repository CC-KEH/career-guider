import React, { useState } from "react";
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {MainContainer,ChatContainer,MessageList,Message,MessageInput,TypingIndicator} from '@chatscope/chat-ui-kit-react'
import { data } from "autoprefixer";

const API_KEY = "asldkfjas;lfkja;slfkajs;fldkasj;fldkasfj";

export default function Chatbox() {
    const [messages,setMessages] = useState([
        {
            message: "Hellow",
            sender: "Assistant",
        },
    ]);
    const [typing,setTyping] = useState(false);

    const handleSend = async(message)=>{
        const newMessage = {
            message: message,
            sender: "user",
            direction: "outgoing"
        }
        const newMessages = [... messages,newMessage]; //All the old messages + new message

        //* Update our messages state
        setMessages(newMessages);
        
        //* Set typing indicator
        setTyping(true);

        //* Process message to Assistant.
        await processMessageToGPT(newMessages);
    }


    async function processMessageToGPT(chatMessages){
        //* Our Chat Messages format is => {sender: "user",message: "hellow"}, but ChatGPT takes format => {role: "user",content: "hellow"}
        //* So we are just formatting here
        //* role can be user, assistant(gpt) and system (One initial message defining how user wants chat gpt to talk)
        
        let apiMessages = chatMessages.map((messageObject)=>{
            let role = "";
            if(messageObject.sender === "Assistant"){
                role = "assistant"
            }else{
                role = "user"
            }
            return {role: role, content: messageObject.message}
        })

        const systemMessage = {
            role: "system",
            content: "Explain all messages like I am a 10 year old."
        }

        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [
                systemMessage,
                ...apiMessages  //* [message1, message2, message3...]
            ] 
        }

        await fetch("https://api.openai.com/v1/chat/completions",{
            method: "POST",
            headers: {
                "Authorization": "Bearer " + API_KEY,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(apiRequestBody)
        }).then((data)=>{
            return data.json(); 
        }).then((data)=>{
            setMessages([...chatMessages,{
                message: data.choices[0].message.content,
                sender: "Assistant"
            }]);
            setTyping(false);
        });
    }

    return (
    <>
        <div style={{position:"relative",height:"480px",width:"270px"}}>
        <MainContainer>
            <ChatContainer>
            <MessageList
             scrollBehavior="smooth"
             typingIndicator={typing?<TypingIndicator content="Hang-on"/> : null}>
                {messages.map((message,index)=>{
                    return <Message key={index} model={message}>

                    </Message>
                })}
                </MessageList>
                <MessageInput placeholder="Enter your query" onSend={handleSend}>

                </MessageInput>
            </ChatContainer>
        </MainContainer>
        </div>
    </>
  );
}
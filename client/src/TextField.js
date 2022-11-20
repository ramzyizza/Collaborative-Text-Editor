import { useCallback, useEffect, useState} from 'react'
import React from 'react'
import Quill from "quill"
import "quill/dist/quill.snow.css"
import {io} from 'socket.io-client'
import "./styles.css";

//Quill Toolbar Configurations
const TOOLBAR =  [
    [{ 'size': [] }], // Size of Text
    [{ 'font': [] }], // Font Type
    [{ 'align': [] }], //Text Alignment 
    [{ 'color': [] }, { 'background': [] }], // Font Color and Highlight
    [ 'bold', 'italic', 'underline', 'strike'], //Font Manipulation
    ['blockquote', 'code-block', 'link'], // Text Type
    [{ 'script': 'super' }, { 'script': 'sub' }], // Font Power and Sub
    [{ 'list': 'ordered' }, { 'list': 'bullet'}, { 'indent': '-1' }, { 'indent': '+1' }], //List type
    [ 'link', 'image', 'video', 'formula' ] //Insert to documents
]

export default function TextEditor(){ 
    //Set state to be able to connect to sockets
    const [socket, setSocket] = useState()
    const [quill, setQuill] = useState()
    //Set State for the Toolbar
    const [state, setState] = React.useState({ value: null });
    const handleChange = value => {
      setState({ value });
    };

    useEffect(() => {
        const s = io("http://localhost:3001")  // connects to the server url that had been declared on server.js
        setSocket(s)                           //initiate the socket to variable S

        return() => {                          //disconnect from our server when no longer needed
            s.disconnect()
        }
    }, [])

    //Function to act as the receiving event from the server
    useEffect(() => {
        //Check if socket or quill appears or not, otherwise return
        if( socket == null || quill == null) return

        const handler = (delta) => {
            quill.updateContents(delta)
        }
        socket.on("receive-changes", handler)
        
        return() => {
            socket.off("receive-changes", handler)
        }
    }, [socket, quill])



    //Function to detect changes on the documents using delta API from Quill
    useEffect(() => {
        //Check if socket or quill appears or not, otherwise return
        if( socket == null || quill == null) return

        const handler = (delta, oldDelta, source) => {
            //If source changes not by user, return nothing
            if (source !== 'user') return
            //send the changes (delta) to the server
            socket.emit("send-changes", delta) //delta denoted the subset of changes
        }
        quill.on('text-change', handler)
        
        return() => {
            quill.off("text-change", handler)
        }
    }, [socket, quill])

    const wrapperRef = useCallback(wrapper => {
        if (wrapper == null) return
        wrapper.innerHTML = ""
        const editor = document.createElement('div')
        wrapper.append(editor) //editor is put inside wrapperRef
        const q = new Quill(editor, {
            theme: "snow",
            modules: { toolbar: TOOLBAR },
        }) //quill is stated in editor 
        setQuill(q)
    }, [])

        useEffect(() => {
        return() =>{ 
            wrapperRef.innerHTML = "" //clears everything out
        }
    }, [])    //useEffect is used here so the new instance of quill only run once

    //HTML Content, Styling with TailwindCSS
    return (
        <>
        <div className='justify-center flex mt-5'>
            <span className='text-6xl font-bold text-slate-200'>Collabora</span>
            <span className='text-6xl font-bold text-blue-700'>Text</span>
        </div>
        <h1 className='text-slate-200 flex justify-center font-semibold'>Final Project Computer Systems and Networking</h1>
        <div className='mt-5 text-white '>
            <h1 className='flex justify-center'>Ramzy Izza Wardhana - 21/472698/PA/20322</h1>
            <h1 className='flex justify-center'>Moehammad Azzriel Ilham - 21/477994/PA/20724</h1>
            <h1 className='flex justify-center mb-6'>Audrey Shafira Fattima - 21/472678/PA/20320</h1>
        </div>

        <div className="container mx-auto" ref={wrapperRef}></div> </> 
    ) 

        


} 
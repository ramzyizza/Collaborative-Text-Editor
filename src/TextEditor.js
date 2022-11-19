import { useEffect, useRef} from 'react'
import React from 'react'
import Quill from "quill"
import "quill/dist/quill.snow.css"
import {io} from 'socket.io-client'

const TOOLBAR =  [
    [{ header: [1,2,3,4,5,6,false]}],
    [{font : []}],
    [{list: "ordered"}, {list: "bullet"}],
    ["bold", "italic" , "underline"],
    [{color: []} , {background: []}],
    [{script:"sub"}, {script: "super"}],
    [{align: []}],
    ["image" , "blackquote" , "code-block"],
    ["clean"],
]
export default function TextEditor(){ 
    useEffect(()    => {
        const socket= io("http://localhost:3001")  // connects to the server IP

        return() => {               //disconnect from our server after connecting
            socket.disconnect()
        }
    }, [])

    const wrapperRef = useRef()
        useEffect(() => {
        const editor = document.createElement('div')
        wrapperRef.current.append(editor) //editor is put inside wrapperRef
        new Quill(editor, {theme: "snow", modules: {toolbar: TOOLBAR}}) //quill is stated in editor 

        return() =>{ 
            wrapperRef.innerHTML = "" //clears everything out
        }
    }, [])                                 //useEffect is used here so the new instance of quill only run once
    return <div className="container" ref={wrapperRef}></div> //makes the header 
} 
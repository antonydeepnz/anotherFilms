import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

interface IWrapperProps {
    show: boolean | false;
}

const Wrapper = styled.div<IWrapperProps>`
    position: relative;
    margin: 15px;
    padding: 10px;
    left: ${props => props.show? '0px' : '-100px'};
    opacity: ${props => props.show ? 1 : 0};
    background-color: grey;
    transition: opacity 0.3s, left 0.5s;
`

interface IMessageProps {
    title: string,
    text: string,
    timer?: number
}

const Message: React.FC<IMessageProps> = ({ title, text, timer }) => {
    const [bool, setBool] = useState(false)

    useEffect(()=> {
        setBool(true)
    }, [])
        
    useEffect(()=>{
       if(timer){
        setInterval(()=>{
            setBool(false)
        },timer)
       } 
    }, [bool,timer])
    return(
        <Wrapper show={bool}>
            <h1>{title}</h1>
            <p>{text}</p>
        </Wrapper>
    )
}

export default Message
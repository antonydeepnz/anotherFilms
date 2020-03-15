import React from 'react'
import styled from 'styled-components'

interface IBtnProps {
    isOpen: boolean
}

const Btn = styled.div<IBtnProps>`
    position: relative;
    transform: rotate(${props => props.isOpen ? '90deg' : '0deg'});
    transition: transform 0.5s;
`

const ShowBtn: React.FC<IBtnProps> = ({ isOpen, children }) => {
    return(
        <Btn isOpen={isOpen}>
            { children }
        </Btn>
    )
}

export default ShowBtn
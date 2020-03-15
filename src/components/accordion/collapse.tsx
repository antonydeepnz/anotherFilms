import React from 'react'
import styled from 'styled-components'

interface IWrapper {
    readonly show: boolean
}

const Wrapper = styled.div<IWrapper>`
    
` 

interface ICollapseProps {
    isOpen: boolean
}

const Collapse: React.FC<ICollapseProps> = ({ isOpen, children }) => {
    return(
        <Wrapper show={isOpen}>
            { children }
        </Wrapper>
    )
}

export default Collapse
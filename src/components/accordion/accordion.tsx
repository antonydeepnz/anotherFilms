import React, { useState } from 'react'
import styled from 'styled-components'

import Collapse from './collapse'

const Wrapper = styled.div`
    position: relative;
    display: flex;
`
interface IAccordionProps {
    
    multiSelect?: boolean | false
}

const Accordion: React.FC<IAccordionProps> = ({ multiSelect }) => {
    const [ active, setActive ] = useState(-1)

    const getSelected = (key:number):void => {
        if (!multiSelect) {
          const result = (key === active)? -1: key
          setActive(result)
        }
    }

    return(
        <Wrapper>
            { 
                
            }
        </Wrapper>
    )
}

export default Accordion
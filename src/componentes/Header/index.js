
import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'
import styled from 'styled-components'

const HeaderNovo = styled.header`
    background-color: white;
    display: flex;
    justify-content: center;    
`

function Header() {
    return (
        <HeaderNovo>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/> 
        </HeaderNovo>      
    )
}

export default Header
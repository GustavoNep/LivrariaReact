import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoNovo = styled.div`
    display: flex; 
    font-size: 30px;
`

const LogoImage = styled.img`
    margin-right: 10px;
    margin-left: 10px;
`



function Logo() {  
    return (
        <LogoNovo>         
            <LogoImage 
            src={logo} 
            alt='logo' 
            ></LogoImage>
            <p> <strong> Livraria Dinda </strong> </p>
        </LogoNovo>
    )
}

export default Logo;
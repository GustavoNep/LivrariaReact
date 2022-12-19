import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'

import styled from 'styled-components'

const ListaNova = styled.li`
    list-style: none;
    padding: 0 20px;
    cursor: pointer;
`

const ImagensUL = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center; 
`

const icones = [perfil, sacola]



function IconesHeader() {
    return (

        <ImagensUL>

        { icones.map( function(ic) {
          return <ListaNova><img src={ic} alt='icone'></img></ListaNova>
        } ) }  

      </ImagensUL>
      
    )
}


export default IconesHeader
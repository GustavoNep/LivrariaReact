import styled from 'styled-components'

const NovoOpcoes = styled.ul`
    display: flex;
`
const NovoOpcao = styled.li`
    min-width: 120px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`


const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function OpcoesHeader() {
    return (

        <NovoOpcoes>
          {textoOpcoes.map( (texto) => {
            return <NovoOpcao><p>{texto}</p></NovoOpcao>
            } ) }
        </NovoOpcoes>
    )
}

export default OpcoesHeader

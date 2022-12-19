import styled from 'styled-components'
import { livros } from './dadosLanc'
import { Titulo } from '../Titulo'
import CardRec from '../Card'
import imagemLivro from '../../imagens/livro2.png'


const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

const UltimosLancamentos = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

function UltimoLanc() {
    return(
        
        <UltimosLancamentos>
            <Titulo 
                cor="#EB9B00" 
                tamanhoFont="36px" 
            > Ultimos Lancamentos
            </Titulo>

            <NovosLivrosContainer>
                {livros.map(livro => (
                    <img src={livro.src} alt="#"/>
                ))}
            </NovosLivrosContainer>

            <CardRec
                titulo="Talvez você se interesse por"
                subtitulo="Angular 11"
                descricao="Construindo uma Aplicação com API"
                img={imagemLivro}
            >
            </CardRec>

        </UltimosLancamentos>
    )
}

export default UltimoLanc
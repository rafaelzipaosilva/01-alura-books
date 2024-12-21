import { livros } from "../Pesquisa/dadosUltimosLancamentos";
import { Titulo } from "../Titulo";
import CardRecomenda from "../CardRecomenda";
import styled from "styled-components";
import imagemLivro from '../../imagens/livro2.png';


const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return(
        <UltimosLancamentosContainer>
            <Titulo
                tipoTexto='uppercase'
                cor='#EB9B00'
                tamanhoFonte='36px'
            >Últimos Lançamentos</Titulo>
            <NovosLivrosContainer>
                {livros.map( livro => (
                    <img src={livro.src} alt=''/>
                ))}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo = 'Talves você se interesse por...'
                subtituto = 'Angular 11'
                descricao= 'Construindo uma aplicação integrada com a plataforma Google'
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos;
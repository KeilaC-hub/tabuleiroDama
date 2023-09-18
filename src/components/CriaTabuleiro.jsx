function GerarLinhas(valor = 10){
    let linhas = [];
    for(let i = 0; 1 <= valor; i++){
        linhas.push(<span>{props.css}</span>)
    }
}



export default function CriaTabuleiro(props){
    return(
        <> 
            {GerarLinhas()}
        </>
    )
}
import styles from '@/styles/tabuleiro.module.css'

function Damas() {
  const conjuntoQuadrados = () => {
    const quadrados = [];
    // Criar 8 linhas e 8 colunas para gerar o tabuleiro
    for (let linha = 1; linha <= 8; linha++) {
      for (let coluna = 1; coluna <= 8; coluna++) {
    
        // Iniciar as várias para verificar se o quadrado será branco ou preto
        let sePreto;
        let seBranco;

        // Intercalar as cores de acordo com o resultado da divisão
        let definirCor;
        let definirPeca;
          if (seBranco = ((linha + coluna) % 2 === 0)) {
            definirCor = styles.branco
          }

          if (sePreto = ((linha + coluna) % 2 === 1)) {
            definirCor = styles.preto
          }

        
        // Criar linhas e colunas com os quadrados com as cores
        quadrados.push(
          <div resultado={`${linha} ${coluna}`} className={`${styles.quadrado} ${definirCor}`}></div>
        );
      }
    }
    return quadrados;
  };

  return (
    <div className={styles.tabuleiro}>
      {conjuntoQuadrados()}
    </div>
  );
}

export default Damas;

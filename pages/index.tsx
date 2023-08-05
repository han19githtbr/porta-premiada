import { useState } from "react";
import Cartao from "../components/Cartao";
import EntradaNumerica from "../components/EntradaNumerica";
import styles from "../styles/Formulario.module.css"
import Link from "next/link"

export default function Formulario() {
  
  /* para mudanca de estado */
  const [qtdePortas, setQtdePortas] = useState(3) 
  const [portaComPresente, setPortaComPresente] = useState(1)

  return (
    <div className={styles.formulario}>
      <div>  
        <Cartao bgcolor="#2200cc">
          <h1 className={styles.montyhall}>Monty Hall</h1>
        </Cartao>
        <Cartao bgcolor="#61ea4f">
          <EntradaNumerica 
            text="Qtde Portas?" 
            value={qtdePortas} 
            onChange={novaQtde => setQtdePortas(novaQtde)} 
          />
        </Cartao>
      </div>
      <div>  
        <Cartao bgcolor="#fff">
          <EntradaNumerica 
            text="Porta com Presente?" 
            value={portaComPresente} 
            onChange={novaPortaComPresente => setPortaComPresente(novaPortaComPresente)} 
          />
        </Cartao>
        
        <Cartao bgcolor="#f6f228">
          <Link href={`/jogo/${qtdePortas}/${portaComPresente}`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>  
        </Cartao>
      </div>
    </div>
  )
}

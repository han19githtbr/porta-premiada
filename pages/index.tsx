//import Presente from "../components/Presente";
import { atualizarPortas } from '../functions/portas';
import { useState } from 'react';
import Porta from "../components/Porta";
import PortaModel from "../model/porta";
import { criarPortas } from '../functions/portas';

export default function Home() {
  return (
    <div style={{display: "flex"}}>
      <h1>Inicio do Jogo</h1>
    </div>
  )
}

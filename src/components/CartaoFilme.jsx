// useState é a "ferramenta" do React que dá MEMÓRIA a um componente.
import { useState } from 'react'

// CartaoFilme mostra UM único filme, recebido de fora pelas props.
function CartaoFilme({ filme }) {
  // ESTADO (useState)
  // -----------------
  // "assistido" guarda o valor atual (começa igual ao filme.assistido).
  // "setAssistido" é a única forma correta de mudar esse valor.
  // Deixamos o estado aqui dentro para cada cartão cuidar do seu próprio botão.
  const [assistido, setAssistido] = useState(filme.assistido)
  const [aparece, setAparece] = useState(true)
  const [curtidas, setCurtidas] = useState(0)

  // Inverte o valor: se era true vira false, se era false vira true.
  function alternarAssistido() {
    setAssistido(!assistido)
  }

  function deuCurtida() {
      setCurtidas(curtidas + 1);
    }
  

  return (
    <div className="cartao">
      <h2 className="cartao-titulo">{filme.titulo}</h2>
      <p className="cartao-ano">Ano: {filme.ano}</p>
      {aparece && (
              <p className="cartao-ano">Ano: {filme.ano}</p>
      )}
      <p className="cartao-nota">Nota: {filme.nota}</p>
      {/* Mostramos um texto diferente dependendo do estado "assistido". */}
      <p className="cartao-status">
        {assistido ? 'Assistido' : 'Não assistido'}
      </p>

      {/* Ao clicar, chamamos a função que muda o estado. */}
      <button className="cartao-botao" onClick={alternarAssistido}>
        Marcar como {assistido ? 'não assistido' : 'assistido'}
      </button>

      <button className="cartao-botao"
      onClick={() => setAparece(!aparece)}>
       {aparece ? 'Esconder' : 'Mostrar'} ano
      </button>

      <button onClick={deuCurtida}>
        {curtidas} CURTIDAS
      </button>

    </div>
  )
}

export default CartaoFilme

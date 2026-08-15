import { useState } from 'react'
import PaginaFilmes from './components/PaginaFilmes'
import PaginaSobre from './components/PaginaSobre'
import PaginaContato from './components/PaginaContato'
import filmes from './data/filmes'
import Rodape from './components/Rodape'
import './App.css'

function App() {

  // "tela" guarda o nome da página ativa. Começa em 'filmes'.
  // Ao clicar num botão do menu, setTela troca esse valor e o React
  // redesenha a tela mostrando o outro componente.
  // Ou seja: navegar aqui é só renderização condicional com useState.
  const [tela, setTela] = useState('filmes')


  return (
    <div className="app">
      <header className="cabecalho">
        <h1>Cineteca</h1>
        <p>Minha coleção de filmes</p>
        <p>Há {filmes.length} filmes disponíveis.</p>
      </header>

      {/* MENU: cada botão muda a tela ativa.
          O botão da tela atual recebe a classe "ativo" para ficar destacado. */}
      <nav className="menu">
        <button
          className={tela === 'filmes' ? 'menu-botao ativo' : 'menu-botao'}
          onClick={() => setTela('filmes')}
        >
          Filmes
        </button>
        <button
          className={tela === 'sobre' ? 'menu-botao ativo' : 'menu-botao'}
          onClick={() => setTela('sobre')}
        >
          Sobre
        </button>
                <button
          className={tela === 'contato' ? 'menu-botao ativo' : 'menu-botao'}
          onClick={() => setTela('contato')}
        >
          Contato
        </button>
      </nav>

      {/* Mostra o componente conforme a tela escolhida. */}
      {tela === 'filmes' && <PaginaFilmes />}
      {tela === 'sobre' && <PaginaSobre />}
      {tela === 'contato' && <PaginaContato />}
      <Rodape />
    </div>

  )

}

export default App
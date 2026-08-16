// PaginaFilmes é a "tela" que mostra a lista de filmes.
// Ela cuida de percorrer os dados e desenhar um cartão para cada filme.
import filmes from '../data/filmes'
import CartaoFilme from './CartaoFilme'

function PaginaFilmes() {
  return (
    <div className="lista">
      {/*
        .map() percorre o array "filmes" e transforma cada filme em um
        <CartaoFilme />. A "key" (filme.id) é um identificador único que
        ajuda o React a saber qual item é qual.
      */}
      {filmes.map((filme) => (
        <CartaoFilme key={filme.id} filme={filme}/>
      ))}
    </div>
  )
}

export default PaginaFilmes

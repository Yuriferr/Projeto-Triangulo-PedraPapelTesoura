import { Link } from "react-router-dom";


export default function Home() {
    return (
      <div className="App">
        <Link to='/pedra'>Jogo: Pedra, Papel e tesoura</Link>
        <Link to='triangulo'>Área do Triangulo</Link>
      </div>
    )
  }
  
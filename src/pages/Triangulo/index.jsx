import { useState } from 'react'
import './styles.css'
import { Link } from 'react-router-dom';

export default function Pedra(){
    const [base, setBase] = useState(0);
    const [altura, setAltura] = useState(0);

    function calcular(){
        var area = ((base * altura) / 2)
        alert(`a área do triangulo: ${area}`)
    }

    return(
        <div>
            <input className="inputTriangulo" type="number" placeholder="Base do triangulo" onChange={(e) => {setBase(e.target.value)}}/>
            <input className="inputTriangulo" type="number" placeholder="Altura do triangulo" onChange={(e) => {setAltura(e.target.value)}}/>
            <br/>
            <button onClick={calcular}>Calcular área do triangulo</button>
            <div className="voltar">
             <Link to="/">Voltar</Link>
            </div>
        </div>
    )
}
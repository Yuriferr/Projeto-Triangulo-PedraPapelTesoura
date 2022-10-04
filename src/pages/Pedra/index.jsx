import './styles.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Pedra() {

    var array = ["pedra", "papel", "tesoura"]
    const [resUsuario, setResUsuario] = useState(0)
    const [resComputador, setResComputador] = useState(0)

    function papel() {
        var rand = Math.floor(Math.random() * array.length);
        var select = document.querySelector('select')
        var option = select.options[select.selectedIndex].value

        var computador = document.getElementById('computador').innerHTML = array[rand]

        if (option == "pedra" && computador == "pedra" || option == "papel" && computador == "papel" || option == "tesoura" && computador == "tesoura") {
            document.getElementById('resultado').innerHTML = "empate"
        }
        else if (option == "pedra" && computador == "papel" || option == "papel" && computador == "tesoura" || option == "tesoura" && computador == "pedra") {
            document.getElementById('resultado').innerHTML = "derrota"
            setResComputador((resComputador) => resComputador + 1)
        }
        else {
            document.getElementById('resultado').innerHTML = "vitoria"
            setResUsuario((resUsuario) => resUsuario + 1)
        }
    }

    return (
        <div className="Tesoura">
            <h2>Placar:</h2>
        <div className="placar">
            <div>
                <h3>Usuario:</h3>
                <h3>{resUsuario}</h3>
            </div>
            <div>
                <h3>Computador:</h3>
                <h3>{resComputador}</h3>
            </div>
        </div>

            <select>
                <option value="pedra">Pedra</option>
                <option value="papel">Papel</option>
                <option value="tesoura">Tesoura</option>
            </select>
            <button onClick={papel}>Jogar</button>
                <label>
                Resposta do Computador:<label id="computador" />
                </label>
            <br />
            <div  className="res">
                <label className="labelRes">
                    Resultado: <label id="resultado" />
                </label>
            </div>
            <div className="voltar">
                <Link to="/">Voltar</Link>
            </div>
        </div>
    )
}
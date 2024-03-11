/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */


// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: '#fff' // color de fondo inicial
    };
    this.changeBackgroundColor = this.changeBackgroundColor.bind(this);
  }

  componentDidMount() {
    console.log("La página ha sido cargada completamente.");
  }

  changeBackgroundColor() {
    const newColor = this.getRandomColor();
    this.setState({ backgroundColor: newColor });
  }

  getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    return (
      <div style={{ backgroundColor: this.state.backgroundColor, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <header style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '10px 0' }}>
          <h1>AEROLINEAS</h1>
        </header>

        <nav style={{ backgroundColor: '#444', color: '#fff', padding: '10px 0' }}>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, textAlign: 'center' }}>
            <li style={{ display: 'inline', margin: '0 10px' }}><a href="#">Inicio</a></li>
            <li style={{ display: 'inline', margin: '0 10px' }}><a href="#">Sobre Nosotros</a></li>
            <li style={{ display: 'inline', margin: '0 10px' }}><a href="#">Servicios</a></li>
            <li style={{ display: 'inline', margin: '0 10px' }}><a href="#">Contacto</a></li>
          </ul>
          <button id="changeColorBtn" onClick={this.changeBackgroundColor}>Cambiar Color de Fondo</button>
        </nav>

        <main>
          <article>
            <h2>AEROLÍNEAS</h2>
            <p>
              Es una empresa que se dedica al transporte de pasajeros o carga —y, 
              en algunos casos, animales— por medio de vehículos aéreos, como aviones 
              o helicópteros.
            </p>
            <img src="Aerolinea.jfif" alt="Inteligencia Artificial" />
          </article>

          <aside>
            <h3>LAS PRIMERAS AEROLÍNEAS</h3>
            <p>
              DELAG, Deutsche Luftschiffahrts-Aktiengesellschaft I fue la primera aerolínea
              del mundo.2​ Fue fundado el 16 de noviembre de 1909, con ayuda del gobierno, y
              operó aeronaves fabricadas por The Zeppelin Corporation. Su sede estaba en Frankfurt.
            </p>
            <img src="Europa.jpg" alt="El éxito de la Inteligencia Artificial" />
            <h3>EUROPA</h3>
            <p>
              La primera línea aérea de ala fija en Europa fue Aircraft Transport and Travel, formada
              por George Holt Thomas en 1916; a través de una serie de adquisiciones y fusiones, esta
              empresa es un antepasado de la British Airways moderna.
            </p>
            <h3>EXPANSIÓN</h3>
            <p>
              En 1926, Alan Cobham examinó una ruta de vuelo desde el Reino Unido a Ciudad del Cabo,
              Sudáfrica, seguido de otro vuelo de prueba a Melbourne, Australia. Otras rutas a la India
              británica y el Extremo Oriente también fueron trazadas y demostradas en este momento.
            </p>
            <img src="Expansion.jpg" alt="El éxito de la Inteligencia Artificial" />
          </aside>
        </main>

        <footer style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '10px 0', marginTop: 'auto' }}>
          <p>© Copyright. Diego.</p>
        </footer>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom/client';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// tu CSS global
import '../styles/index.css';

// componentes
import Home from './components/Home';
import Ballpit from './components/Ballpit';

const App = () => (
  <div className="app">
    <Ballpit
      className="ballpit-bg"
      // ↓ Mira: ahora sólo 50 bolas
      count={50}
      // ↓ Y sólo en rojo, azul y amarillo
      colors={[0xff0000, 0x0000ff, 0xffff00]}
      gravity={0.7}
      friction={0.8}
      wallBounce={0.95}
      followCursor
    />
    <Home />
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

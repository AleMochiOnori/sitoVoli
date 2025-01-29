import { useEffect, useState } from 'react';
import "./Compagnie.css";

function App() {
  const [compagnie, setCompagnie] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8080/compagnia')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Errore HTTP! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setCompagnie(data))
      .catch(error => console.error('Errore:', error));
  }, []);

  return (
    <div className='Wrapper'>
      <div className='CardContainer'>
        {compagnie.map((compagnia, index) => (
          <div className='Card' key={index}>
            <div className='CardHeader'>
              <h3>{compagnia[0]}</h3> {/* Nome compagnia */}
            </div>
            <div className='CardBody'>
              <p><strong>Anno di fondazione:</strong> {compagnia[1]}</p> {/* Anno di fondazione */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

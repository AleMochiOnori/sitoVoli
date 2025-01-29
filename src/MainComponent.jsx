import './MainComponent.css'
import aeroporto from "./assets/aeroporto.jpg"

function MainComponent() {
  
  
  return (
    <>
<main className="air-station-main">
  <section className="hero-section">
    <div className="background">
      <h1 id='main-text'>Benvenuti su Air Station</h1>
    </div>
  </section>
  <div className='midSection'>
      <div className='card'>
          <p className='middle-content-text'>
                Fondata nel 2005, Air Station è nata con una semplice missione: rendere i viaggi 
                aerei accessibili, confortevoli e memorabili per tutti. Dal nostro primo volo, 
                partito da Milano con una manciata di passeggeri, siamo cresciuti fino a diventare 
                uno dei principali fornitori di soluzioni di viaggio in Europa.
          </p>
      </div>
      <img className='immagineStile' src={aeroporto} alt="Logo di Air Station" />
  </div>
</main>

    </>
  )
}  export default MainComponent
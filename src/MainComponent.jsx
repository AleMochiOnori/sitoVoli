import './MainComponent.css'
import aeroporto from "./assets/aeroporto.jpg"
import immagine2 from "./assets/immagine2.jpg"

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
      <div className='section2'>
           <img className='immagineStile2' src={immagine2} alt="" />
           <p className='middle-content-text2'> Da un piccolo inizio nel 2005, Air Station ha rivoluzionato il modo in cui le persone 
            viaggiano. La nostra passione è offrire esperienze di volo straordinarie, combinando 
            comfort, efficienza e convenienza per soddisfare ogni viaggiatore.</p>
      </div>
     
    </>
  )
}  

export default MainComponent;

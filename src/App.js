import Tv from './img/tv.png'
import Mobile from './img/mobile.jpg'
import Devices from './img/devices.png' 
import { useEffect, useState } from 'react';

function App() {
  const [toggleShow , setToggleShow ] = useState(false)
 
 const handleShow = (e) => {
   setToggleShow(!toggleShow)
   
  }




  return (
    <div className="app">
      <header className="hero">
        <div className="hero-top">
          <img src="https://i.ibb.co/r5krrdz/logo.png" alt="" />
          <a href="#" className="btn btn-rounded">Accedi</a>
        </div>
        <div className="hero-content">
          <h1>Film, serie TV e tanto altro .
            <br />
            Senza limiti.
          </h1>
          <h2>Guarda ciò che vuoi ovunque. Disdici quando vuoi.</h2>
          <p>Vuoi guardare Netflix? Inserisci l'indirizzo email per abbonarti o riattivare il tuo abbonamento.</p>
          <form className='form'>
            <input type="text" name=" email" id="" placeholder="Indirizzo email " />
            <button className="btn">Inizia > </button>
          </form>
        </div>
    </header>
    <section className="tabs">
        <div className="tab-item">
        <p>
          <strong>   Goditi Netflix sulla tua TV.</strong>
        Guarda Netflix su smart TV, Playstation, Xbox, Chromecast, Apple TV, lettori Blu-ray e molti altri dispositivi.
        </p>
        <img src={Tv} alt=""/>
        </div>
        <div className="tab-item">
        <p>
          <strong> Scarica le tue serie da guardare offline.</strong>
       
          Salva facilmente i tuoi preferiti così avrai sempre qualcosa da guardare.
        </p>
        <img src={Mobile} alt=""/>
        </div>
        <div className="tab-item">
        <p>
          <strong>Guarda Netflix ovunque.</strong>
          Cellulare, tablet, laptop e TV: scegli tu cosa usare per guardare in streaming film e serie TV senza limiti e senza spendere di più.
        </p>
        <img src={Devices} alt=""/>
        </div>
    </section>
    <section className="domande">
      <h2>Domande frequenti</h2>
      <div className="item">
        <button onClick={handleShow} className='ask-btn'>Cos'e Netflix</button>
        {toggleShow && (
          <p id='q1'>
          Netflix è un servizio di streaming che offre una varietà di serie TV, film, documentari pluripremiati e tanto altro su una vasta gamma di dispositivi connessi a Internet.
    
          Guarda quello che vuoi, in qualsiasi momento e senza interruzioni pubblicitarie. Il tutto a una quota mensile ridotta. C'è sempre qualcosa di nuovo da scoprire: aggiungiamo nuovi film e serie TV ogni settimana!
          </p>
        )}
      </div>
      <div className="item">
        <button onClick={handleShow} className='ask-btn'>Cos'e Netflix</button>
        {toggleShow && (
          <p id='q1'>
          Netflix è un servizio di streaming che offre una varietà di serie TV, film, documentari pluripremiati e tanto altro su una vasta gamma di dispositivi connessi a Internet.
    
          Guarda quello che vuoi, in qualsiasi momento e senza interruzioni pubblicitarie. Il tutto a una quota mensile ridotta. C'è sempre qualcosa di nuovo da scoprire: aggiungiamo nuovi film e serie TV ogni settimana!
          </p>
        )}
      </div>
      <div className="item">
        <button onClick={handleShow} className='ask-btn'>Cos'e Netflix</button>
        {toggleShow && (
          <p id='q1'>
          Netflix è un servizio di streaming che offre una varietà di serie TV, film, documentari pluripremiati e tanto altro su una vasta gamma di dispositivi connessi a Internet.
    
          Guarda quello che vuoi, in qualsiasi momento e senza interruzioni pubblicitarie. Il tutto a una quota mensile ridotta. C'è sempre qualcosa di nuovo da scoprire: aggiungiamo nuovi film e serie TV ogni settimana!
          </p>
        )}
      </div>
      <div className="item">
        <button onClick={handleShow} className='ask-btn'>Cos'e Netflix</button>
        {toggleShow && (
          <p id='q1'>
          Netflix è un servizio di streaming che offre una varietà di serie TV, film, documentari pluripremiati e tanto altro su una vasta gamma di dispositivi connessi a Internet.
    
          Guarda quello che vuoi, in qualsiasi momento e senza interruzioni pubblicitarie. Il tutto a una quota mensile ridotta. C'è sempre qualcosa di nuovo da scoprire: aggiungiamo nuovi film e serie TV ogni settimana!
          </p>
        )}
      </div>
      <div className="item">
        <button onClick={handleShow} className='ask-btn'>Cos'e Netflix</button>
        {toggleShow && (
          <p id='q1'>
          Netflix è un servizio di streaming che offre una varietà di serie TV, film, documentari pluripremiati e tanto altro su una vasta gamma di dispositivi connessi a Internet.
    
          Guarda quello che vuoi, in qualsiasi momento e senza interruzioni pubblicitarie. Il tutto a una quota mensile ridotta. C'è sempre qualcosa di nuovo da scoprire: aggiungiamo nuovi film e serie TV ogni settimana!
          </p>
        )}
      </div>

      <p>Vuoi guardare Netflix? Inserisci l'indirizzo email per abbonarti o riattivare il tuo abbonamento.</p>

      <form className='form'>
            <input type="text" name=" email" id="" placeholder="Indirizzo email " />
            <button className="btn">Inizia > </button>
          </form>

    </section>
    <footer className="footer">
			<p>Domande? Chiama 800-130-364</p>
			<div className="footer-cols">
				<ul>
					<li><a href="#">FAQ</a></li>
					<li><a href="#">Investor Relations</a></li>
					<li><a href="#">Ways To Watch</a></li>
					<li><a href="#">Corporate Information</a></li>
					<li><a href="#">Netflix Originals</a></li>
				</ul>
				<ul>
					<li><a href="#">Help Center</a></li>
					<li><a href="#">Jobs</a></li>
					<li><a href="#">Terms Of Use</a></li>
					<li><a href="#">Contact Us</a></li>
				</ul>
				<ul>
					<li><a href="#">Account</a></li>
					<li><a href="#">Redeem Gift Cards</a></li>
					<li><a href="#">Privacy</a></li>
					<li><a href="#">Speed Test</a></li>
				</ul>
				<ul>
					<li><a href="#">Media Center</a></li>
					<li><a href="#">Buy Gift Cards</a></li>
					<li><a href="#">Cookie Preferences</a></li>
					<li><a href="#">Legal Notices</a></li>
				</ul>
			</div>
      <select name="lang" id="" className='select'>
        <option value="">Italiano</option>
        <option value="">Inglese</option>

      </select>

		</footer>

    </div>
  );
}

export default App;

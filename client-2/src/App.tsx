import './App.css';
import logo from './assets/complete-logo.svg'
import homeArt from './assets/home-art.svg'
import barcode from './assets/barcode.svg'

function App() {
  return (
    <>
      <section className='home noise'>
        <div className='home-art'>
          <img src={homeArt} alt="homeArt" />
        </div>
        <div className='hom-conteinerfor-conteiner'>
          <div className='home-conteiner-01'>
            <div className='home-conteiner-02'>
              <div className='home-conteiner-03'>
                <img src={logo} alt="logo" />
                <h1>Soluciones tecnologicas para emprendedores de  todo el mundo</h1>
              </div>
            </div>
          </div>
        </div>
        <div className='home-contactus-link noise'>
            <div className='home-contactus-conteiner'>
                <img src={barcode} alt="barcode" />
                <div className='contact-us-link-conteiner'>
                    <a href=''>Contactanos</a>
                </div>
            </div>
        </div>
      </section>
      <section className='our-services'>
        <div className='slogan noise'>
            <h1>Somos lo que tu negocio necesita</h1>
        </div>
      </section>
      <section className='chose-the-design'>

      </section>
      <section className='contact-us'>

      </section>

      <section className='footer '>
        <img src="" alt="Logo" />
        <h1>codetlab@gmail.com</h1>
        <h1>#54 3548 57 3432</h1>
      </section>
    </>
  );
}

export default App;

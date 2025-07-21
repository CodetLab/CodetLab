import './App.css';
import logo from './assets/complete-logo.svg'
import homeArt from './assets/home-art.svg'

import { useEffect, useRef, useState } from 'react';

function App() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [barCount, setBarCount] = useState(0);

    useEffect(() => {
        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                const width = entry.contentRect.width;
                console.log("Container width:", width); // 🟡 DEBUG
                const barWidth = 0.5;
                setBarCount(Math.floor(width / barWidth));
            }
        });

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

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
                <div>
                    <img src={logo} alt="logo" />
                    <h1>Soluciones tecnologicas para emprendedores de  todo el mundo</h1>
                </div>
              
              </div>
            </div>
          </div>
        </div>
        <div className='home-contactus-link noise'>
            <div className='home-contactus-conteiner'>
                <div
                    ref={containerRef}
                    className="w-full h-32 flex overflow-hidden"
                    style={{

                        position: "absolute",
                        top: "10%",
                        left:"1%",
                        width: '95%',
                        height: '11vh',
                        display: 'flex',
                        overflow: 'hidden',
                        padding: 0,
                        margin: 0,
                        marginRight:'5px',
                        lineHeight: 0, // 🔑 Evita espacios extra por fuente si usás spans

                    }}
                    >
                {Array.from({ length: barCount }).map((_, i) => (
                <div
                        key={i}
                        style={{
                            width: `${Math.random() > 0.10 ? 2 : 10}px`,
                            height: '100vh',
                            backgroundColor: i % 2 === 0 ? 'black' : 'white',
                }}
                />
                ))}
                </div>
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
            <div>
                
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

import React , { Component } from 'react';
import './App.css';
import coffe from './img/coffe.png';
import bgchicara from './img/chicara-coffe.png';
import cafehq from './img/cafe-hq.png';
import cafehqop from './img/cafe-hq-op.png';



export default class App extends Component {


  render() {

   
    window.addEventListener('scroll', function(e){
   
 {/* PARALAX EFFECT */}
      const target = document.querySelectorAll('.scroll');

      var index = 0, length = target.length;
      for (index; index < length; index++) {
        
        var pos = window.pageYOffset * target[index].dataset.rate;

        target[index].style.transform = 'translate3d(0px , '+pos+'px , 0px)';
      }

    });

{/* OPACITY EFFECT */}

    window.addEventListener('scroll', function() {
      var currScrollPos2 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (currScrollPos2 > 100) {
        document.getElementById('transp1').style.opacity = -currScrollPos2 / 100 + 2;
        document.getElementById('transp2').style.opacity = -currScrollPos2 / 100 + 2;
        document.getElementById('transp3').style.opacity = -currScrollPos2 / 100 + 2;
        document.getElementById('transp4').style.opacity = -currScrollPos2 / 70 + 2;

      }
    }
  );

  

  {/* SCROLL TO */}

  

    return (

      <div className="App container-fluid p-0">
      {/* MENU - NAVBAR */}
      
      <nav className="navbar navbar-expand-md container fixed-top">
      
      {/* <i className="fab fa-connectdevelop"> </i>*/}
      <a className="navbar-brand mr-auto p-1 bd-highlight p-brand-custom " href="#"><img src={coffe} className="logo-brand"/> &nbsp; &nbsp;</a>          
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainToggler"
        aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation">
      <spam className="navbar-toggler-icon"></spam>
      </button>
      
      <section className="collapse navbar-collapse navbar-nav-collapse text-center" id="navbarMainToggler" >
        <div className="navbar-nav  pr-3 font-nav ">
        {/* d-flex flex-row-reverse bd-highlight col */}
          <a className="nav-item nav-link text-dark" href="#">Home</a>
          <a className="nav-item nav-link text-dark" href="#">Sobre</a>
          <a className="nav-item nav-link text-dark" href="#">Produtos</a>
          <a className="nav-item nav-link text-dark" href="#">Franquias</a>
          <a className="nav-item nav-link text-dark" href="#">Blog</a>
          <a className="nav-item nav-link text-dark" href="#">Contato</a> 
        </div>
        <spam className="text-dark float-left mx-auto brand-spam" id="transp5">COFFEE & BARBER</spam>
      </section>
     
        
      </nav>

   
      {/* nth-of-type(1) */}
      <section className="section-parallax">
        <div className="coffe-barber">
          <ul>
            <li className="scroll" id="transp1" data-rate="1">COFFEE</li>
            <li id="transp2">&</li>
            <li className="scroll" id="transp3" data-rate="-1">BARBER</li>
          </ul>
          <h3 id="transp4">Since 1987</h3>
        </div>
       </section>

      {/* nth-of-type(2) */}
      <section className="section-parallax d-flex justify-content-center flex-row">
        <div className="top-section container-md text-center d-flex pt-4 justify-content-center flex-column">
          <img src={bgchicara} className="mx-auto d-block bg-chicara" />
          <h2>Bem Vindo</h2>
          <p>“Se você é apaixonado por café e tem interesse em saber mais sobre o grão, este é o seu lugar.
             História da bebida, dicas de preparo, curiosidades e muito mais…”</p>
        
           
        
        
        </div>
        
        <div className="right-section row container flex-row d-flex justify-content-center">
            
        </div>
      </section>
    

     
      {/* <section className="second-section container">
        
        
      </section> */}
      
{/*       
      <div className="table01-section flex-column bg-dark">
        <h1>O Café Mais Gostoso do Mundo</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsa amet nisi</p>
        <button>Seja um parceiro</button>
      </div>
      <div className="table02-section flex-row d-flex aligm-items-center container col">
        <img src={cafehq} className="cafe-hq rellax"/>
      </div> 
   */}
        

        {/* <img src={cafehqop} className="cafe-hq-op rellax "/> */}
   
    </div>
    
    )
  }
}

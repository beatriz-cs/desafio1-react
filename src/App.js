import React, { Component } from "react";
import "./styles.css";

class App extends Component{

  state = {
    nome: "Beatriz",
    idade: 22,
    comidaFavorita: "Açaí e esfirra",
    musicas: [
      {
        musica1: "Buzzcut season - Lorde",
        musica2: "Bikini porn - Tove Lo",
        musica3: "Salvatore - Lana del Rey",
        musica4: "Esquadros - Adriana Calcanhotto",
      },
    ]
  }

  render(){
    return(
        <header>
          <h1>{this.state.nome}</h1>
          <h2>{this.state.idade}</h2>
          <h3>{this.state.comidaFavorita}</h3>


          <h4>Músicas preferidas</h4>
          <ul className="musicas" >
          <li>{this.state.musicas[0].musica1}</li>
            <li>{this.state.musicas[0].musica2}</li>
            <li>{this.state.musicas[0].musica3}</li>
            <li>{this.state.musicas[0].musica4}</li>
          </ul>
          
        </header>
    )
  }

}



export default App;

import React from 'react';
import './App.css';
import ProptimusOmega from './proptimusOmega';
import ProptimusBeta from './proptimusBeta';
import ProptimusPrime from './proptimusPrime';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      callForHelp: "https://i.pinimg.com/originals/f8/7d/ec/f87dec9d6334af383a27f73e48ccf154.png",
      proptimusPhotos: {
        "Proptimus Prime": "http://pngimg.com/uploads/transformers/transformers_PNG3.png",
        "Proptimus Beta": "https://library.kissclipart.com/20181004/jbw/kissclipart-alola-exeggutor-height-clipart-optimus-prime-trans-6afe73e9efab0cac.png",
        "Proptimus Omega": "https://cdn.shopify.com/s/files/1/0076/4103/8906/products/Transformers-Movie-Studio-Series-38-Voyager-G1-Optimus-Prime-Semi-truck-Render_1024x1024.png?v=1549582726",
      },
      activeProp: "",
      catchPhrase: {
        "Proptimus Prime": "I'm pretty great, I suppose...",
        "Proptimus Beta": "I don't suck as badly?",
        "Proptimus Omega": "I'm not a great choice!"
      }
    }
  }

  callForBadHelp = (event) => {
    event.preventDefault()

    console.log('This guy sucks')
    this.setState({activeProp: "Proptimus Omega"})
  }

  callForBetterHelp = (event) => {
    event.preventDefault()

    console.log('This guy is okay')
    this.setState({activeProp: "Proptimus Beta"})
  }

  gimmeAllYouGot = (event) => {
    event.preventDefault()

    console.log('This guy is the best')
    this.setState({activeProp: "Proptimus Prime"})
  }

  sendThemHome = (event) => {
    event.preventDefault()

    console.log('')
    this.setState({activeProp: ""})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={this.state.callForHelp}
            onClick={this.callForBadHelp}
            className="App-logo"
            alt="logo"
          />

          {this.state && this.state.activeProp === "Proptimus Omega" &&
          <>
            <p className="proptimusOmega">Will this do, human?</p>
            <ProptimusOmega
              proptimusPhotos={this.state.proptimusPhotos}
              callForBetterHelp={this.callForBetterHelp}
              catchPhrase={this.state.catchPhrase}
            />
          </>
          }

          {this.state && this.state.activeProp === "Proptimus Beta" &&
          <>
            <p className="proptimusBeta">Will this do, human?</p>
            <ProptimusBeta
              proptimusPhotos={this.state.proptimusPhotos}
              gimmeAllYouGot={this.gimmeAllYouGot}
              catchPhrase={this.state.catchPhrase}
            />
          </>
          }

          {this.state && this.state.activeProp === "Proptimus Prime" &&
          <>
            <p className="proptimusPrime">Will this do, human?</p>
            <ProptimusPrime
              proptimusPhotos={this.state.proptimusPhotos}
              sendThemHome={this.sendThemHome}
              catchPhrase={this.state.catchPhrase}
            />
          </>
          }

        </header>
      </div>
    );
  }
}

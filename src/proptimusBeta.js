import React from 'react';

export default class ProptimusOmega extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      escalate: false,
    }
  }

  render() {
    return(
      <section>
        <img
          src={this.props.proptimusPhotos["Proptimus Beta"]}
          className="App-logo"
          alt="logo"
          onClick={this.props.gimmeAllYouGot}
        />
        <p>{this.props.catchPhrase["Proptimus Beta"]}</p>
      </section>
    )
  }
}

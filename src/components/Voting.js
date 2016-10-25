import React from 'react'
import Winner from './Winner'
import Buttons from './Buttons'

export default React.createClass({

  render: function () {

    return <div className="voting">
      {this.props.winner ?

        <Winner name={this.props.winner} /> :
        <Buttons {...this.props} />
      }
    </div>
  }
})
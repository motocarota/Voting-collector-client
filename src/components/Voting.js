import React from 'react'
import Winner from './Winner'
import Buttons from './Buttons'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default React.createClass({
  mixins: [PureRenderMixin],

  render: function () {

    return <div className="voting">
      {this.props.winner ?

        <Winner ref="winner" name={this.props.winner} /> :
        <Buttons {...this.props} />
      }
    </div>
  }
})
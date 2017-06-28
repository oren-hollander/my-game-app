import React, { Component } from 'react'
import { pure } from 'recompose'
import { string, func } from 'prop-types'
import { constant } from 'lodash/fp'
import Grid from '../grid/Grid'
import Tile from '../grid/Tile'

class SetAmountPanel extends Component {

  static defaultProps = {
    validator: constant(true)
  }

  static propTypes = {
    label: string.isRequired,
    onAction: func.isRequired,
    onCancel: func.isRequired,
    validator: func
  }

  constructor(props) {
    super(props)

    this.state = {
      amount: ''
    }

    this.onAction = this.onAction.bind(this)
    this.isValid = this.isValid.bind(this)
    this.amountChanged = this.amountChanged.bind(this)
  }

  isValid(value) {
    return this.props.validator(value)
  }
  
  onAction() {
    const amount = this.state.amount
    if(this.isValid(amount) === true)
      this.props.onAction(Number(amount))
  }

  amountChanged(e) {
    this.setState({amount: e.target.value})
  }

  render() {
    const validationStatus = this.isValid(this.state.amount)
    return (
      <Grid>
        <Tile bg='SteelBlue' onClick={this.props.onCancel}>
          <span style={{fontSize: '2em'}}>
            Back
          </span>
        </Tile>
        <Tile>
          <div style={{
            fontSize: '1.4em'
          }}>
            Amount: <input style={{fontSize: '1em'}} value={this.state.amount} onChange={this.amountChanged} />
          </div>
        </Tile>
        <Tile bg={validationStatus === true ? 'SteelBlue' : 'Gray'} onClick={this.onAction}>
          <span style={{fontSize: '2em'}}>
            {this.props.label}
          </span>
        </Tile>
        {
          validationStatus !== true ? <Tile bg='red'>{validationStatus}</Tile> : null
        }
      </Grid>
    )
  }
}


export default pure(SetAmountPanel)
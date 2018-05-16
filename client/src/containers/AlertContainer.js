import React, { Component } from 'react';
import { connect } from 'react-redux'
import Alert from '../components/Alert';
import { updateAlert } from '../actions';

const mapStateToProps = (state) => {
  return {
    alert: state.alert
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateAlert: (status) => {
      dispatch(updateAlert(status))
    }
  }
}

class AlertContainer extends Component {

  onDismiss = (e) => {
    this.props.updateAlert({
      status: 'dismissed',
      visible: false
    });
  }

  alertInfo = (status) => {

    let info = {};

    if(status === 'dismissed') {
      info.color = 'light';
      info.text = '';
    }
    if(status === 'success') {
      info.color = 'success';
      info.text = 'Transaction Completed!';
    }
    if(status === 'buyFail') {
      info.color = 'danger';
      info.text = 'Buy Transaction Failed! Insufficient Funds.';
    }
    if(status === 'sellFail') {
      info.color = 'danger';
      info.text = 'Sell Transaction Failed! Insufficient Shares.';
    }

    return info;

  }

  render() {

    const { visible, status } = this.props.alert;
    const info = this.alertInfo(status);

    return (
      <Alert 
        color={info.color}
        text={info.text}
        visible={visible}
        onDismiss={this.onDismiss}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertContainer)
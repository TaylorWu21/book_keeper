import React from 'react';
import { connect } from 'react-redux';
import { clearFlash } from'../actions/flash';
import { pointer, alertBase, alertInfo, alertSuccess, alertError, closeFlash, flashCont } from './styles.scss';

const fadeFlash = (dispatch) => {
  setTimeout( () => {
    dispatch(clearFlash())
  }, 1000)
}

const Flash = ({ flash, dispatch }) => {
  let style;
  switch(flash.msgType) {
    case 'info':
      style = alertInfo
      break;
    case 'success':
      style = alertSuccess
      break;
    case 'error':
      style = alertError
      break;
    default:
      style = ''
      break;
  }

  if(flash.message) {
    return(
      <div
        className={`${pointer} ${style} ${alertBase} center`}
        onClick={ () => dispatch(clearFlash()) }>
        <div className={flashCont}>
          <a className={`${pointer} ${closeFlash} grey-text text-darken-2`}>&times;</a>
          {flash.message}
          { fadeFlash(dispatch) }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { flash: state.flash }
}

export default connect(mapStateToProps)(Flash);
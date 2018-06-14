import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../reducers/chat';
import { gamoraMessages, hulkShapeMessage } from '../../utils/messages';
import CHAT_SHAPE from './shape';

import './chat.less';

class Chat extends Component {
  componentWillMount() {
    this.props.dispatch(actions.addMessage(gamoraMessages[0]));
    this.props.dispatch(actions.addMessage(gamoraMessages[1]));
  }

  fetchText(e) {
    this.props.dispatch(actions.fetchProperty('text', e.target.value));
  }

  addMessage() {
    const message = { ...hulkShapeMessage, text: this.props.chat.text };

    this.props.dispatch(actions.addMessage(message));
  }

  render() {
    const { chat } = this.props;

    return (
      <div className='chat' id='chat'>
        <div className='top-counter'>
          <div className='icon-counter'/>
          <span> {chat.messages.length} </span>
        </div>
        <div className='messages'>
          { JSON.stringify(chat) }
        </div>

        <div className='form'>
          <input type='text' value={chat.text} onChange={e => this.fetchText(e)}/>
          <button className='btn' onClick={() => this.addMessage()}>send</button>
        </div>
      </div>
    );
  }
}

Chat.propTypes = {
  dispatch: PropTypes.func,
  chat: PropTypes.shape(CHAT_SHAPE),
};

export default connect(state => state.chat.toJS())(Chat);

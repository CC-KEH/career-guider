import React, { Component } from 'react';
import styles from './Chatbox.module.css'; // Import your CSS module
import chatboxsvg from '../../public/chatbox-icon.svg';
class Chatbox extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      messages: [],
      currentMessage: '',
    };
  }

  toggleChatbox = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.onSendButtonClick();
    }
  };

  onSendButtonClick = () => {
    const { currentMessage, messages } = this.state;

    if (currentMessage === '') {
      return;
    }

    const newMessage = { name: 'User', message: currentMessage };
    this.setState({
      messages: [...messages, newMessage],
      currentMessage: '',
    });

    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
    fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      body: JSON.stringify({ message: currentMessage }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        const newResponse = { name: 'Vidit', message: response.answer };
        console.log(response.answer)
        this.setState({
          messages: [...messages, newResponse],
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  render() {
    const { isOpen, messages, currentMessage } = this.state;

    return (
      <div className="container">
      <div className={styles.chatbox}>
        <div className={`${styles.chatbox__support} ${isOpen ? styles['chatbox--active'] : ''}`}>
          <div className={styles.chatbox__header}>
            <div className={styles['chatbox__image--header']}>
              <img src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png" alt="image" />
            </div>
            <div className={styles['chatbox__content--header']}>
              <h4 className={styles['chatbox__heading--header']}>Chat support</h4>
              <p className={styles['chatbox__description--header']}>Hi. My name is Vidit. How can I help you?</p>
            </div>
          </div>
          <div className={styles.chatbox__messages}>
            {messages.map((message, index) => (
              <div key={index} className={`${styles.messages__item} ${message.name === 'Vidit' ? styles['messages__item--visitor'] : styles['messages__item--operator']}`}>
                {message.message}
              </div>
            ))}
          </div>
          <div className={styles.chatbox__footer}>
            <input
              type="text"
              placeholder="Write a message..."
              value={currentMessage}
              onChange={(e) => this.setState({ currentMessage: e.target.value })}
              onKeyDown={this.handleInputKeyPress}
            />
            <button className={styles['chatbox__send--footer']} onClick={this.onSendButtonClick}>Send</button>
          </div>
        </div>
        <div className={styles['chatbox__button']}>
          <button onClick={this.toggleChatbox}><img src={chatboxsvg} alt="Chatbox" /></button>
        </div>
        </div>
      </div>
    );
  }
}

export default Chatbox;

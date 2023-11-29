import React, { Component } from "react";
import styles from "./Chatbox.module.css"; // Import your CSS module
import chatboxsvg from "/chatbox-icon.svg";
class Chatbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      messages: [],
      input: "",
    };
  }

  toggleChat = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleInput = (e) => {
    this.setState({ input: e.target.value });
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    this.sendMessage(e);
  };
  sendMessage = (e) => {
    e.preventDefault();
    if (this.state.input === "") return;
    let msg1 = { name: "User", message: this.state.input };
    this.setState({ messages: [msg1, ...this.state.messages], input: '' });
    fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      body: JSON.stringify({ message: this.state.input }),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((r) => {
        console.log("API Response:", r); // Log the API response
        let msg2 = { name: "Vidit", message: r.message };
        this.setState({ messages: [msg2,...this.state.messages] }, () => {
          console.log("Updated Messages:", this.state.messages); // Log the updated messages
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  render() {
    const { isOpen, messages, input } = this.state;

    return (
      <div className="container">
        <div className={styles.chatbox}>
          <div
            className={`${styles.chatbox__support} ${
              isOpen ? styles["chatbox--active"] : ""
            }`}
          >
            <div className={styles.chatbox__header}>
              <div className={styles["chatbox__image--header"]}>
                <img
                  src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png"
                  alt="image"
                />
              </div>
              <div className={styles["chatbox__content--header"]}>
                <h4 className={styles["chatbox__heading--header"]}>
                  Chat support
                </h4>
                <p className={styles["chatbox__description--header"]}>
                  Hi. My name is Vidit. How can I help you?
                </p>
              </div>
            </div>
            <div className={styles.chatbox__messages}>
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`${styles.messages__item} ${
                    message.name === "Vidit"
                      ? styles["messages__item--visitor"]
                      : styles["messages__item--operator"]
                  }`}
                >
                  {message.message}
                </div>
              ))}
            </div>
            <form className={styles.chatbox__footer} onSubmit={this.handleFormSubmit}>
              <input
                type="text"
                placeholder="Write a message..."
                value={input}
                onChange={this.handleInput}
              />
              <button
                type="submit"
                className={styles["chatbox__send--footer"]}
              >
                Send
              </button>
            </form>
           
          </div>
          <div className={styles["chatbox__button"]}>
            <button onClick={this.toggleChat}>
              <img src={chatboxsvg} alt="Chatbox" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Chatbox;

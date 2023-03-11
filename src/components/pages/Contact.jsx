import { React, useState } from "react";

import { validateEmail } from "../../utils/helpers";

function Contact() {
    // state variables for contact forms fields

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, username, and password
        if (inputType === "email") {
            setEmail(inputValue);
        } else if (inputType === "name") {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        if (!name) {
            setErrorMessage("Name empty or invalid");
            // We want to exit out of this code block if something is wrong so that the user can correct it
            return;
            // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
        }

        // First we check to see if the name email or message is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email)) {
            setErrorMessage("Email message is invalid");
            // We want to exit out of this code block if something is wrong so that the user can correct it
            return;
            // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
        }

        if (!message) {
            setErrorMessage("Please enter message");
            // We want to exit out of this code block if something is wrong so that the user can correct it
            return;
            // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
        }

        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setName("");
        setMessage("");
        setEmail("");
    };

    return (
        <div className="page">
            <h3>Contact me</h3>
            <form>
                <div>
                    <label for="name">Enter your name: </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={handleInputChange}
                        placeholder="Name"
                        required
                    />
                </div>
                <div>
                    <label for="email">Enter your email: </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={handleInputChange}
                        placeholder="Email"
                        required
                    />
                </div>
                <div>
                    <label for="message">message: </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        cols="33"
                        value={message}
                        onChange={handleInputChange}
                        placeholder="message"
                        required
                    ></textarea>
                </div>
                <div>
                    <input
                        type="submit"
                        value="Submit!"
                        onClick={handleFormSubmit}
                    />
                </div>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

export default Contact;

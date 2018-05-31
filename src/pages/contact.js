import React from 'react';
import Link from 'gatsby-link';
import axios from 'axios';

const encode = data => Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      'event_type[]': '',
      location: '',
      comments: '',
    };
  }

  handleSubmit = e => {
    axios
      .post('/', encode({ 'form-name': 'contact', ...this.state }), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      })
      .then(response => console.log(response))
      .catch(error => console.error(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <h1> Contact Mozbooth </h1>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label htmlFor="name">
              Your Name:
              <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label htmlFor="email">
              Your Email:
              <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label htmlFor="event_type[]">
              Event Type:
              <select name="event_type[]" multiple>
                <option value="leader">Wedding</option>
                <option value="follower">Company</option>
                <option value="follower">Birthday</option>
                <option value="follower">Anniversary</option>
                <option value="follower">Other</option>
              </select>
            </label>
          </p>
          <p>
            <label htmlFor="location">
              Event Location:
              <input type="text" name="location" />
            </label>
          </p>
          <p>
            <label htmlFor="comments">
              Comments/Questions:
              <textarea name="comments" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
        <Link to="/"> Home</Link>
      </div>
    );
  }
}

export default Contact;

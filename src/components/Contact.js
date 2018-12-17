import React from "react";
import { navigate } from "gatsby-link";
import { Location } from '@reach/router'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    console.log('submit')
    e.preventDefault();
    const form = e.target;
    fetch("/es/contact", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    const {heading, description, name, email, message} = this.props
    return (
      <div>
        <h2 className="has-text-weight-semibold is-size-3">
          {heading}
        </h2>
        <p className="is-size-5">{description}</p>
        <Location>
        { ({ location }) => {
            const locale = location.pathname.startsWith('/es') ? 'es' : 'en' 
            return (
              <form
                name="contact"
                method="post"
                action={`/${locale}/contact/thanks`}
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"name"} >{name}</label>
                  <div className="control">
                    <input className="input" type={"text"} name={"name"} onChange={this.handleChange} id={"name"} required={true} />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"email"}>{email}</label>
                    <div className="control">
                      <input className="input" type={"email"} name={"email"} onChange={this.handleChange} id={"email"} required={true} />
                    </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"message"}>{message}</label>
                  <div className="control">
                    <textarea className="textarea" name={"message"} onChange={this.handleChange} id={"message"} required={true} />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link" type="submit">{locale === 'es' ? 'Envíe' : 'Send'}</button>
                </div>
              </form>
            )
          }}
        </Location>
      </div>
    );
  }
}

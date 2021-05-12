import React, { Component } from "react";

class ActiveCampaignForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formSubmitted: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://jamesroedev.activehosted.com/proc.php", {
      method: "POST",
      body: data,
      mode: "no-cors",
    })
      .then((response) => {
        this.setState({ formSubmitted: true });
        setTimeout(() => {
          this.setState({ formSubmitted: false });
        }, 5000);
      })
      .catch((error) => console.log("Request failed", error));
  }

  render() {
    const { formSubmitted } = this.state;

    return (
      <div className="flex justify-center items-center">
        <div className="border border-8 border-gray-300 rounded">
          {formSubmitted && (
            <p>
              <strong>THANK YOU</strong> for joining our mailing list!
              <br />
              Check your inbox for a confirmation.
            </p>
          )}

          {!formSubmitted && (
            <form className="flex items-center" onSubmit={this.onSubmit}>
              <input type="hidden" name="u" value="1" />
              <input type="hidden" name="f" value="1" />
              <input type="hidden" name="s" />
              <input type="hidden" name="c" value="0" />
              <input type="hidden" name="m" value="0" />
              <input type="hidden" name="act" value="sub" />
              <input type="hidden" name="v" value="2" />

              <input
                className="p-2"
                type="text"
                name="email"
                placeholder="Your Email Address"
                required
              />
              <div className="text-gray-300"> | </div>
              <input
                className="p-2"
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
              <input
                className="yellow p-2 rounded"
                type="submit"
                value="Follow"
              />
            </form>
          )}
        </div>
      </div>
    );
  }
}

export default ActiveCampaignForm;

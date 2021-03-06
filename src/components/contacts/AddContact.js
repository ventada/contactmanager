import React, { Component } from "react";

import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import uuid from "uuid";
import axios from "axios";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    //CHECK FOR ERRORS
    if (name === "") {
      this.setState({ errors: { name: "Name Is Required" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email Is Required" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Phone Is Required" } });
      return;
    }

    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };

    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newContact
    );
    dispatch({ type: "ADD_CONTACT", payload: res.data });

    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    this.props.history.push("/");
  };
  onchange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    lable="Name"
                    placeholder="Enter Name...."
                    name="name"
                    value={name}
                    onChange={this.onchange}
                    errors={errors.name}
                  />
                  <TextInputGroup
                    lable="Email"
                    placeholder="Enter Email...."
                    name="email"
                    value={email}
                    onChange={this.onchange}
                    errors={errors.email}
                  />
                  <TextInputGroup
                    lable="Phone"
                    placeholder="Enter Phone...."
                    name="phone"
                    value={phone}
                    onChange={this.onchange}
                    errors={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;

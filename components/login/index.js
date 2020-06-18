import { useState } from "react";
import { connect } from "react-redux";
import { tryAuthenticate } from "../../redux/actions/authActions";
import LoginForm from "./loginForm";

function Login({ authentication, tryAuthenticate, status }) {
  const [credentials, setCredentials] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    tryAuthenticate({ ...credentials });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  }

  return (
    <LoginForm onSubmit={handleSubmit} onChange={handleChange} error={status} />
  );
}

function mapStateToProps(state, ownProps) {
  return {
    authentication: state.authentication,
    status: state.status,
  };
}

const mapDispatchToProps = {
  tryAuthenticate,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

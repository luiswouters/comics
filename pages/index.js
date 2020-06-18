import { useEffect } from "react";
import Head from "next/head";
import { connect } from "react-redux";
import Login from "../components/login";
import Comics from "../components/comics";

function Home({ authentication }) {
  return (
    <div className="container">
      <Head>
        <title>Comics List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{authentication === null ? <Login /> : <Comics />}</main>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    authentication: state.authentication,
  };
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import { useState, useEffect } from "react";
import { Container, Link, Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { loadComics } from "../../redux/actions/comicsActions";
import { logout } from "../../redux/actions/authActions";
import { connect } from "react-redux";
import ComicsList from "./comicsList";

function Comics({ loadComics, comics, user, logout }) {
  const [list, setList] = useState([]);

  function logoutFunc(event) {
    event.preventDefault();
    logout();
  }

  useEffect(() => {
    if (comics.length === 0) {
      loadComics().catch((error) => {
        alert("Loading comics failed:" + error);
      });
    } else {
      setList(comics);
    }
  }, [comics]);

  return <ComicsList list={list} user={user} logoutFunc={logoutFunc} />;
}

function mapStateToProps(state, ownProps) {
  return {
    comics: state.comics,
    user: state.authentication,
  };
}

const mapDispatchToProps = {
  loadComics,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Comics);

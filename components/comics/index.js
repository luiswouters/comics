import { useState, useEffect } from "react";
import { loadComics, unloadComics } from "../../redux/actions/comicsActions";
import { logout } from "../../redux/actions/authActions";
import { connect } from "react-redux";
import ComicsList from "./comicsList";

function Comics({ loadComics, comics, user, logout }) {
  const [list, setList] = useState([]);

  function logoutFunc(event) {
    event.preventDefault();
    logout();
    unloadComics();
  }

  useEffect(() => {
    if (comics.length === 0) {
      loadComics(user.heroId).catch((error) => {
        alert("Loading comics failed:" + error);
      });
    } else {
      setList(comics);
    }
  }, [comics, user]);

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

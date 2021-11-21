import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Books from "./components/Books/Books";
import Footer from "./components/Footer/Footer";
import Searchbar from "./components/Searchbar/Searchbar";
import Layout from "./components/Layout/Layout";
import AuthContext from "./context/authContext";

class App extends Component {
  books = [
    {
      id: 1,
      title: "Diuna",
      author: "Frank Herbert",
      publisher: "Rebis",
      bugs: 9,
      cover: "/images/diuna.jpeg",
    },
    {
      id: 2,
      title: "Lore",
      author: "Alexandra Barcken",
      publisher: "Nowe drogi",
      bugs: 5,
      cover: "/images/lore.jpeg",
    },
    {
      id: 3,
      title: "Siedem Sióstr",
      author: "Lucinda Riley",
      publisher: "Albatros",
      bugs: 7,
      cover: "/images/siedemSiostr.jpeg",
    },
  ];
  state = {
    books: this.books,
    loading: true,
    isAuthenticated: false,
  };

  searchHandler(term) {
    console.log("szukaj z app:", term);
    const books = [...this.books].filter((x) =>
      x.title.toLowerCase().includes(term.toLowerCase())
    );
    this.setState({ books });
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuthenticated: this.state.isAuthenticated,
          login: () => this.setState({ isAuthenticated: true }),
          logout: () => this.setState({ isAuthenticated: false }),
        }}
      >
        <Layout
          header={
            <Header>
              <Searchbar onSearch={(term) => this.searchHandler(term)} />
            </Header>
          }
          menu={<Menu />}
          content={<Books books={this.state.books} />}
          footer={<Footer />}
        />
      </AuthContext.Provider>
    );
  }
}

export default App;

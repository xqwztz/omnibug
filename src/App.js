import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Books from "./components/Books/Books";

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
  };

  searchHandler(term) {
    console.log("szukaj z app:", term);
    const books = [...this.books].filter(x => x.title.toLowerCase().includes(term.toLowerCase()));
    this.setState({ books });
  }

  render() {
    return (
      <div className="App">
        <Header onSearch={(term) => this.searchHandler(term)} />
        <Menu />
        <Books books={this.state.books} />
      </div>
    );
  }
}

export default App;

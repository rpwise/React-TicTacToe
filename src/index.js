import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// this class is replaced with the function below 
// class Square extends React.Component {

//     // learning about the constructor
//     // constructor(props) {
//     //     super(props); // constructors will always start with this line
//     //     this.state = {
//     //         value: null,
//     //     };
//     // }

//     render() {
//       return (
//         <button className="square" 
//             //onClick={() => this.setState( { value: 'X'})}
//             onClick={() => this.props.onClick()}
//         >
//           {this.props.value}
//         </button>
//       );
//     }
//   }

// replacement for class above
// takes the props passed in to render what 
// to do on click and what to show on the screen
function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

  // what to do/render when the 'Board' is called
  class Board extends React.Component {

    // constructor building state when the class is instantiated
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    // what to do when a square is clicked on
    handleClick(i){
        const squares = this.state.squares.slice();
        //squares[i] = 'X';
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        })

    }

    // when rendering, this is what is injected on the page
    // displays the state of the square
    // maps the onClick to the custom handleClick method
    renderSquare(i) {
      return ( 
            <Square value={ this.state.squares[i] }
                onClick={() => this.handleClick(i)} 
            />
        );  
    }
  
    // what to render when the class is called
    // builds the status at the top and builds 
    // the grid by rendering individual squares 
    render() {
      //const status = 'Next player: X';
      const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  // main class
  // calls the 'Board' class, wrapped in divs, to render
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  // game is the main tag - this tells React to file the Game class
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  
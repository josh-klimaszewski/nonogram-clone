import React, { Component } from 'react';
import './style.css';
class Nonogram extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tiles: Array(16).fill('inactive'),
            solution: [
                'active', 'marked', 'active', 'active',
                'marked', 'marked', 'marked', 'active',
                'active', 'active', 'active', 'marked',
                'marked', 'marked', 'marked', 'active',
                ]
         }
    }

    renderTile = i => {
        return <div 
                onClick = {() => {this.handleClick(i)}}
                className={`tile  ${this.state.tiles[i]}`} />
    }
    handleClick = i => {
        const tiles = this.state.tiles.slice();
        tiles[i] = 
            tiles[i] === 'inactive'
            ? 'active' 
            : tiles[i] === 'active' 
            ? 'marked' 
            : 'inactive'
        this.setState({tiles})
    }
    checkGame = () => {
        const { tiles, solution } = this.state;
        for(let i=0; i<16; i++) {
            if(tiles[i] !== solution[i]) {
                return;
            }
        }
        console.log('you won!')
    }
    render() {
        this.checkGame();
        return (
            <div className="game">
                <div className="clue-wrap">
                    <div className="nonogram">
                        {this.renderTile(0)}
                        {this.renderTile(1)}
                        {this.renderTile(2)}
                        {this.renderTile(3)}
                        {this.renderTile(4)}
                        {this.renderTile(5)}
                        {this.renderTile(6)}
                        {this.renderTile(7)}
                        {this.renderTile(8)}
                        {this.renderTile(9)}
                        {this.renderTile(10)}
                        {this.renderTile(11)}
                        {this.renderTile(12)}
                        {this.renderTile(13)}
                        {this.renderTile(14)}
                        {this.renderTile(15)}
                    </div>
                    <div className="clue-column">
                        <div className="clue">1 2</div>
                        <div className="clue">1</div>
                        <div className="clue">3</div>
                        <div className="clue">1</div>
                    </div>
                </div>
                <div className="clue-row">
                    <div className="clue">1 1</div>
                    <div className="clue">1</div>
                    <div className="clue">1 1</div>
                    <div className="clue">2 1</div>
                </div>
            </div>
        )
    }
}

export default Nonogram;
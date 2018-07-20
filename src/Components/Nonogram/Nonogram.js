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
        return (<div 
                onClick = {() => {this.handleClick(i)}}
                className={`tile  ${this.state.tiles[i]}`} />)
    }
    renderRowClue = row => {
        const tiles = this.state.solution;
        const matchRow = (thisRow) => {
            const rowOne = ['active', 'marked', 'active', 'active']
            const rowTwo = ['marked', 'marked', 'marked', 'active']
            const rowThree = ['active', 'active', 'active', 'marked']
            const rowFour = ['marked', 'marked', 'marked', 'active']
            if (thisRow.join() === rowOne.join()) {
                return (<div className="clue">1 2</div>)
            }
            else if (thisRow.join() === rowTwo.join()) {
                return (<div className="clue">1</div>)
            }
            else if (thisRow.join() === rowThree.join()) {
                return (<div className="clue">3</div>)
            }
            else if (thisRow.join() === rowFour.join()) {
                return (<div className="clue">1</div>)
            }
        }
        if (row === 1) {
            let indexes = [0, 1, 2, 3]
            const thisRow = tiles.filter((tile, index) => {
                return indexes.indexOf(index) !== -1
            })
            return matchRow(thisRow)
        }
        else if (row === 2) {
            let indexes = [4, 5, 6, 7]
            const thisRow = tiles.filter((tile, index) => {
                return indexes.indexOf(index) !== -1
            })
            return matchRow(thisRow)
        }
        else if (row === 3) {
            let indexes = [8, 9, 10, 11]
            const thisRow = tiles.filter((tile, index) => {
                return indexes.indexOf(index) !== -1
            })
            return matchRow(thisRow)
        }
        else if (row === 4) {
            let indexes = [12, 13, 14, 15]
            const thisRow = tiles.filter((tile, index) => {
                return indexes.indexOf(index) !== -1
            })
            return matchRow(thisRow)
        }
    }
    renderColumnClue = column => {
        const tiles = this.state.solution;
        const matchColumn = (thisColumn) => {
            const columnOne = ['active', 'marked', 'active', 'marked']
            const columnTwo = ['marked', 'marked', 'active', 'marked']
            const columnThree = ['active', 'marked', 'active', 'marked']
            const columnFour = ['active', 'active', 'marked', 'active']
            if (thisColumn.join() === columnOne.join()) {
                return (<div className="clue">1 1</div>)
            }
            else if (thisColumn.join() === columnTwo.join()) {
                return (<div className="clue">1</div>)
            }
            else if (thisColumn.join() === columnThree.join()) {
                return (<div className="clue">1 1</div>)
            }
            else if (thisColumn.join() === columnFour.join()) {
                return (<div className="clue">2 1</div>)
            }
        }
        if (column === 1) {
            let indexes = [0, 4, 8, 12]
            const thisColumn = tiles.filter((tile, index) => {
                return indexes.indexOf(index) !== -1
            })
            return matchColumn(thisColumn)
        }
        else if (column === 2) {
            let indexes = [1, 5, 9, 13]
            const thisColumn = tiles.filter((tile, index) => {
                return indexes.indexOf(index) !== -1
            })
            return matchColumn(thisColumn)
        }
        else if (column === 3) {
            let indexes = [2, 6, 10, 12]
            const thisColumn = tiles.filter((tile, index) => {
                return indexes.indexOf(index) !== -1
            })
            return matchColumn(thisColumn)
        }
        else if (column === 4) {
            let indexes = [3, 7, 11, 15]
            const thisColumn = tiles.filter((tile, index) => {
                return indexes.indexOf(index) !== -1
            })
            return matchColumn(thisColumn)
        }
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
        for(let i = 0; i < 16; i ++) {
            if(tiles[i] !== solution[i]) {
                return;
            }
        }
        console.log('you won!')
    }
    render() {
        this.checkGame();
        // this.renderRowClue(1)
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
                        {this.renderRowClue(1)}
                        {this.renderRowClue(2)}
                        {this.renderRowClue(3)}
                        {this.renderRowClue(4)}
                    </div>
                </div>
                <div className="clue-row">
                    {this.renderColumnClue(1)}
                    {this.renderColumnClue(2)}
                    {this.renderColumnClue(3)}
                    {this.renderColumnClue(4)}
                </div>
            </div>
        )
    }
}

export default Nonogram;
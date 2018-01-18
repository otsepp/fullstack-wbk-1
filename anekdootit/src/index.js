import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
	  mostVoted: -1,
	  votes: []
    }
  }
  render() {
    return (
      <div>
		<Anecdote 
			anecdotes={this.props.anecdotes} 
			votes={this.state.votes} 
			index={this.state.selected} 
		/>
		
		<NextButton app={this} length={this.props.anecdotes.length} />
		
		<VoteButton 
			app={this}
			selected={this.state.selected} 
			mostVoted={this.state.mostVoted} 
			votes={this.state.votes} 
		/>
		
		<h3>Most voted anecdote</h3>
		<MostVoted 
			mostVoted={this.state.mostVoted} 
			anecdotes={this.props.anecdotes} 
			votes = {this.state.votes} 
		/>
		
	  </div>
    )
  }
}

const Anecdote = ({anecdotes, votes, index}) => {
	let voteCount = 0;
	if (votes[index] !== undefined)
		voteCount = votes[index]
	return (
		<div>
			<p>{anecdotes[index]}</p>
			<p>has {voteCount} votes</p>
		</div>
	)
}

const NextButton = ({app, length}) => {
	const handleClick = () => {
		return () => {
			app.setState({ selected: Math.floor(Math.random() * length) })
		}
	}
	return (
		<button onClick={handleClick()}>next</button>
	)
}

const VoteButton = ({app, selected, mostVoted, votes}) => {
	const handleClick = () => {
		return () => {
			if (votes[selected] === undefined)
				votes[selected] = 0
			
			votes[selected]++
			
			if (votes[selected] > votes[mostVoted] || mostVoted === -1)
				app.setState({ mostVoted: selected })
		}
	}
	return (
		<button onClick={handleClick()}>vote</button>
	)
}

const MostVoted = ({mostVoted, anecdotes, votes}) => {
	if (mostVoted >= 0) {
		return (
			<div>
				<Anecdote 
					anecdotes = {anecdotes}
					votes = {votes}
					index = {mostVoted}
				/>
			</div>
		)
	}
	return (
		<div>
			<p>None yet</p>
		</div>
	)
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
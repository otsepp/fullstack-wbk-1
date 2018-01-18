import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {
	constructor() {
		super()
		
		this.hyvä = "hyvä";
		this.neutraali = "neutraali";
		this.huono = "huono";
		
		this.state = {
			[this.hyvä]: 0,
			[this.neutraali]: 0,
			[this.huono]: 0,
			yhteensa: 0
		}
	}
	render() {
		return (
			<div>
				<h1>Unicafe</h1>
				
				<h3>Palaute</h3>				
				<Button app={this} kenttä={this.hyvä} />
				<Button app={this} kenttä={this.neutraali} />
				<Button app={this} kenttä={this.huono} />
				
				<h3>Statistiikka</h3>
				<Statistics state={this.state}/>
			</div>
		)
	}
}

const Button = ({app, kenttä}) => {
	const handleClick = () => {
		return () => {
			app.setState({ [kenttä]: app.state[kenttä] + 1 })
			app.setState({ yhteensa: app.state.yhteensa + 1 })
		}
	}
	return (
		<button onClick={handleClick()}>{kenttä}</button>
	)
}

const Statistics = ({state}) => {
	const laskePosMaara = () => ((state.hyvä / state.yhteensa)*100).toFixed(1) + '%'
	if (state.yhteensa > 0) {
		const style = { width: "30%" };
		return (
			<div>
				<table style={style}>
					<tbody>
						<Statistic teksti={"hyvä"} arvo={state.hyvä} />
						<Statistic teksti={"neutraali"} arvo={state.neutraali} />
						<Statistic teksti={"huono"} arvo={state.huono} />
						<Statistic teksti={"positiivisia"} arvo={laskePosMaara()} />
					</tbody>
				</table>
				
				{/*<Statistic teksti={"hyvä"} arvo={state.hyvä} />
				<Statistic teksti={"neutraali"} arvo={state.neutraali} />
				<Statistic teksti={"huono"} arvo={state.huono} />
				<Statistic teksti={"positiivisia"} arvo={laskePosMaara()} />*/}
			</div>
		)
	}
	return (
		<div>
			<p>ei yhtään palautetta annettu</p>
		</div>
	)
}

const Statistic = ({teksti, arvo}) => {
	return (
		<tr>
			<td>{teksti}</td>
			<td>{arvo}</td>
		</tr>
	)
}

ReactDOM.render(
	<App />, document.getElementById('root')
)

import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => (
	<h1>{props.nimi}</h1>
)

const Sisalto = (props) => {
	return (
	<div>
		<Osa osa={props.osat[0]} />
		<Osa osa={props.osat[1]} />
		<Osa osa={props.osat[2]} />
	</div>
	)
}

const Osa = (props) => (
	<p>{props.osa.nimi} {props.osa.tehtavia}</p>
)

const Yhteensa = (props) => {
	var sum = 0;
	props.osat.forEach((osa) => {
		sum+=osa.tehtavia
	})
	return (
		<p>yhteensä {sum} tehtävää</p>
	)
}

const App = () => {
	const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
	}

  return (
    <div>
	  <Otsikko nimi={kurssi.nimi} />
	  <Sisalto osat={kurssi.osat} />
	  <Yhteensa osat={kurssi.osat} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
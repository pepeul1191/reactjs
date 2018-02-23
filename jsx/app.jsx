class HelloMessage extends React.Component {
  render() {
    return (
      <label>
        Hello {this.props.name}
      </label>
    );
  }
}

const el = (
	<h1 id="title">
		Hola <span className="texto-error">mundo</span> {2 + 5}
	</h1>
)

ReactDOM.render(el, document.getElementById('app2'));

function reloj(){
	let now = new Date().toLocaleTimeString()
	const el = <span>{now}</span>
	ReactDOM.render(el, document.getElementById('reloj'))
}

setInterval(reloj, 1000)

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById('hello')
);
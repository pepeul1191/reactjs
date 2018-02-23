class HelloMessage extends React.Component {
  render() {
    return (
      <label>
        Hello {this.props.name}, id {this.props.id}
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
	<ul>
		<li><HelloMessage name="Taylor 1" id="1"/></li>
		<li><HelloMessage name="Taylor 2" id="2"/></li> 
		<li><HelloMessage name="Taylor 3" id="3"/></li> 
		<li><HelloMessage name="Taylor 4" id="4"/></li> 
		<li><HelloMessage name="Taylor 5" id="5"/></li>  
	</ul>
	,document.getElementById('hello')
);

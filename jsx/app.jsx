const el = (
	<h1 id="title">
		Hola <span className="rojo">mundo</span> {2 + 5}
	</h1>
)
ReactDOM.render(el, document.getElementById('app2'));

function reloj(){
	let now = new Date().toLocaleTimeString()
	const el = <span>{now}</span>
	ReactDOM.render(el, document.getElementById('reloj'))
}

setInterval(reloj, 1000)
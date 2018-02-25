// MENSAJE is value setted by the server when rendering de page but before loading this script

class LabelLogin extends React.Component {
  render() {
  	if(this.props.mensaje == 'false'){
  		return('');
  	}else{
  		return (
	      <label className="secondary-color">Ususuario y/o contraseña incorrectos</label>
	    );
  	}
  }
}

ReactDOM.render(
	<LabelLogin mensaje={MENSAJE}/>,document.getElementById('mensaje')
);

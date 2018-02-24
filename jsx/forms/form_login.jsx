class FormLogin extends React.Component {
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
	<FormLogin mensaje={MENSAJE}/>,document.getElementById('mensaje')
);

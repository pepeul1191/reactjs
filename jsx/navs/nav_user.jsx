// import USER... this value is setted by the server when rendering de page but before loading this script

class NavUser extends React.Component {
  render() {
    if(typeof this.props.user !== 'undefined' && this.props.user != ''){
      return (
        <div>
          <img src={BASE_URL + this.props.user.img} alt={this.props.user.user_name} className="img-fluid rounded-circle" />
          <h2 className="h5">{this.props.user.name}</h2>
          <span>{this.props.user.position}</span>
        </div>
      );
    }else{
      return('');
    }
  }
}

ReactDOM.render(
	<NavUser user={USER}/>,document.getElementById('user-logged')
);
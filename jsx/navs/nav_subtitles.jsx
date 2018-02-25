// import ITEMS... this value is setted by the server when rendering de page but before loading this script

class NavSubtitle extends React.Component {
  render() {
    if(typeof this.props.items !== 'undefined' && this.props.items != ''){
      return (
      	<div>
        	{
        		this.props.items.map((item, index) => (
			       	<h5 className="sidenav-heading" key={index}>{item.subtitulo}</h5>
			    	))
			    }
        </div>
      );
    }else{
      return('');
    }
  }
}

ReactDOM.render(
	<NavSubtitle items={ITEMS}/>,document.getElementById('second-menu')
);
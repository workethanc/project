import React from 'react';
import {Header} from 'components';
class App extends React.Component{
	render(){
		let chk = /(test)/;
		let isHeader = chk.test(this.props.location.pathname);

		return (
			<div>
				{isHeader ? undefined : <Header />}
				<Header />
				App !!!!!!!!!!!!!!!123123!!!!!!!!!!!!!!!!!!asdfasdfasdf
			</div>			
		);
	}
}

export default App;
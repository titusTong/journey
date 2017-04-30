import React from 'react';
import IndexView from './views/IndexView.jsx';


const App = ({location})=>{
	let View = IndexView;
	const path = {location}.location.pathname;
	if(path == '/') {
		View = IndexView
	};




	return (<View />)
}




export default App;

























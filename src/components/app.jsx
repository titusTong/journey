import React from 'react';
import MainLayout from '../layouts/MainLayout';
import IndexView from './view/IndexView';


const App = ({location})=>{
	let View = IndexView;
	const path = {location}.location.pathname;
	if(path == '/') {
		View = IndexView
	};




	return (
		<MainLayout>
			<View />
		</MainLayout>
	)
}



export default App;

























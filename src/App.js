import React, { useEffect, useState } from 'react';
import './App.css';
import Map from './components/Map';
import MapLoadingComponent from './components/MapLoading';

function App() {
	const MapLoading = MapLoadingComponent(Map);
	const [appState, setAppState] = useState({
		loading: false,
		posts: null,
	});

	useEffect(() => {
		setAppState({ loading: true });
		const apiUrl = `http://127.0.0.1:8000/api`;
		fetch(apiUrl)
			.then((data) => data.json())
			.then((posts) => {
				setAppState({ loading: false, posts: posts });
			});
	}, [setAppState]);
	return (
		<div className="App">
			<h1>Latest Posts</h1>
			<MapLoading isLoading={appState.loading} posts={appState.posts} />
		</div>
	);
}

export default App;
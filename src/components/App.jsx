import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import HogForm from "./HogForm";
import Controls from "./Controls";
import hogs from "../porkers_data";

function App() {
	const [allHogs, setAllHogs] = useState(hogs);
	const [greasedOnly, setGreasedOnly] = useState(false);
	const [sortBy, setSortBy] = useState("");
	const [hiddenHogs, setHiddenHogs] = useState(new Set());

	// Filter hogs based on greased status and hidden hogs
	const filteredHogs = allHogs.filter(hog => {
		if (hiddenHogs.has(hog.name)) return false;
		if (greasedOnly && !hog.greased) return false;
		return true;
	});

	// Sort hogs based on selected criteria
	const sortedHogs = [...filteredHogs].sort((a, b) => {
		if (sortBy === "name") {
			return a.name.localeCompare(b.name);
		} else if (sortBy === "weight") {
			return a.weight - b.weight;
		}
		return 0;
	});

	const handleGreasedChange = () => {
		setGreasedOnly(!greasedOnly);
	};

	const handleSortChange = (e) => {
		setSortBy(e.target.value);
	};

	const handleHideHog = (hogName) => {
		setHiddenHogs(prev => new Set([...prev, hogName]));
	};

	const handleAddHog = (newHog) => {
		setAllHogs(prev => [...prev, newHog]);
	};

	return (
		<div className="App">
			<Nav />
			<div className="ui container">
				<div className="ui segment">
					<h2>Controls</h2>
					<Controls
						greasedOnly={greasedOnly}
						onGreasedChange={handleGreasedChange}
						sortBy={sortBy}
						onSortChange={handleSortChange}
					/>
				</div>
				<div className="ui segment">
					<h2>Add New Hog</h2>
					<HogForm onAddHog={handleAddHog} />
				</div>
				<div className="ui segment">
					<h2>Hog List</h2>
					<HogList hogs={sortedHogs} onHide={handleHideHog} />
				</div>
			</div>
		</div>
	);
}

export default App;

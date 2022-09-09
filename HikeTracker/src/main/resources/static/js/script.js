window.addEventListener('load', function() {
	console.log('script.js loaded');
	init();
})
////////// END OF LOADING THE WINDOW FUNCTION //////////
function init() {
	//TODO:
	//- Event handlers for buttons 
	loadAllHikes();


}
function loadAllHikes() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/hikes');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let hikeList = JSON.parse(xhr.responseText);
				displayHikes(hikeList);
			}
			else {
				console.log('error loading events: ' + xhr.status);
			}
		}
	};
	xhr.send();
}
function displayHikes(hikeList) {
	let hikeListDiv = document.getElementById('hikesList');
	hikeListDiv.textContent = '';
	let ul = document.createElement('ul');
	hikeListDiv.appendChild(ul);
	for (let hike of hikeList) {
		let li = document.createElement('li');
		li.textContent = hike.name;
		ul.appendChild(li);
	}
}














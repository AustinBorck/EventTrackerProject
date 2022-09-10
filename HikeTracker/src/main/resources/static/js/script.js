window.addEventListener('load', function() {
	console.log('script.js loaded');
	init();
})
////////// END OF LOADING THE WINDOW FUNCTION //////////
function init() { 
	loadAllHikes();
///////// ADDING EVENT LISTENER TO FORM //////////
document.createHike.createBtn.addEventListener('click', function(e){
	e.preventDefault();
	let hike = {};
	hike.name = createHike.name.value;
	hike.description = createHike.description.value;
	hike.difficulty = createHike.difficulty.value;
	hike.latitude = createHike.lat.value;
	hike.longitude = createHike.long.value;
	hike.elevation = createHike.elevation.value;
	hike.trailLength = createHike.length.value;
	hike.dogsAllowed = createHike.dogsAllowed.value;
	hike.imageUrl = createHike.imageUrl.value;
	addNewHike(hike);
	createHike.reset();
////////// END FORM EVENT LISTENER //////////
});

////////// CREATE HIKE FUNCTION //////////
function addNewHike(hike){
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/hikes');
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200 || xhr.status === 201){
				console.log('hike created');
			} else if(xhr.status === 400){
				displayError('Invalid Data');
			}else{
				displayError('ERROR Creating hike ' + xhr.status);
			}
		}
	}
	xhr.setRequestHeader("Content-type", "application/json");
	let hikeJSON = JSON.stringify(hike);
	xhr.send(hikeJSON);
	}
}
////////// END CREATE HIKE FUNCTION //////////


////////// BEGINNING LOADING/DISPLAYING ALL HIKES //////////
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
		let br = document.createElement('br');
		ul.appendChild(br);
		li.textContent = hike.name;
		li.style="list-style:none";
		li.size="10px"
		ul.appendChild(li);
	}
}
////////// END LOADING/DISPLAYING ALL HIKES //////////


///////// ERROR MSG FUNCTION //////////
function displayError(msg) {
	let hikesList = document.getElementById('hikesList');
	hikesList.textContent = '';
	hikesList.textContent = msg;
	}











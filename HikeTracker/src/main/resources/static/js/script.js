window.addEventListener('load', function() {
	console.log('script.js loaded');
	init();
})
////////// END OF LOADING THE WINDOW FUNCTION //////////
function init() {
	loadAllHikes();
	///////// ADDING EVENT LISTENER TO FORM //////////
	document.createHike.createBtn.addEventListener('click', function(e) {
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
	function addNewHike(hike) {
		let xhr = new XMLHttpRequest();
		xhr.open('POST', 'api/hikes');
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status === 200 || xhr.status === 201) {
					console.log('hike created');
				} else if (xhr.status === 400) {
					displayError('Invalid Data');
				} else {
					displayError('ERROR Creating hike ' + xhr.status);
				}
			}
		}
		xhr.setRequestHeader("Content-type", "application/json");
		let hikeJSON = JSON.stringify(hike);
		xhr.send(hikeJSON);
	}
	////////// END CREATE HIKE FUNCTION //////////

}//INIT END

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
		li.style = "list-style:none";
////////// ADDING LISTENER TO GET A SINGLE HIKE //////////
		li.addEventListener('click', function(e) {
				console.log('HIKES ID ===== ' + hike.id);
				let xhr = new XMLHttpRequest();
				xhr.open('GET', 'api/hikes/' + hike.id);
				xhr.onreadystatechange = function() {
					if (xhr.readyState === 4) {
						if (xhr.status === 200) {
							let hike = JSON.parse(xhr.responseText);
							console.log(hike);
							//TODO SEND HIKE TO SINGLE DISPLAY FUNCTION
							displaySingleHike(hike);
						} else {
							console.log('ERROR DISPLAYING HIKE: ' + xhr.status);
						}
					}
				}//onreadystatechange end
				xhr.send();
		});

		ul.appendChild(li);
	}


}
////////// END LOADING/DISPLAYING ALL HIKES //////////

////////// SINGLE HIKE DISPLAY PAGE //////////
// TODO:
//remove other data
// Display hike with pic && google maps api
//add home button
//add delete button
//add update button

function displaySingleHike(hike){
	let form = document.getElementById('createHikeDiv');
	let listOfHikes = document.getElementById('hikesList');
	let header = document.getElementById('header');
	form.parentElement.removeChild(form);
	listOfHikes.parentElement.removeChild(listOfHikes);
	header.textContent = hike.name;
	let singleHikePic = document.getElementById('singleHikePic');
	singleHikePic.src = hike.imageUrl;
	singleHikePic.height = 500;
	singleHikePic.width = 800;
	let singleHikeDesc = document.getElementById('singleHikeDesc');
	singleHikeDesc.textContent = hike.description;
	let difficulty = document.getElementById('singleHikeDifficulty');
	difficulty.textContent = "Difficulty Level: " + hike.difficulty;
	let elevation = document.getElementById('singleHikeElevation');
	elevation.textContent = "Elevation Gain: " + hike.elevation +"ft";
	let trailLength = document.getElementById('singleHikeTrailLength');
	trailLength.textContent = "Trail Length: " + hike.trailLength + "mi";
	let dogsAllowed = document.getElementById('singleHikeDogsAllowed');
	if(hike.dogsAllowed){
		dogsAllowed.textContent = "Dogs are allowed.";
	}else{
	dogsAllowed.textContent = "No dogs allowed.";
	}
	let averagePace = document.getElementById('singleHikeAveragePace');
	averagePace.textContent = "The average hiker can complete this hike in: " + (hike.trailLength/2) +" hrs."
	let maps = document.getElementById('singleHikeMap');
	//TODO ADD MAPS
}


///////// ERROR MSG FUNCTION //////////
function displayError(msg) {
	let hikesList = document.getElementById('hikesList');
	hikesList.textContent = '';
	hikesList.textContent = msg;
}











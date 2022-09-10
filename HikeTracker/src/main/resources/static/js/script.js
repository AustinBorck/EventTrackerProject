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
					location.reload();
					alert("Your hike has been added.");
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
	hikeListDiv.textContent = ' ';
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
//add update button

function displaySingleHike(hike) {
	
	let form = document.getElementById('createHikeDiv');
	let listOfHikes = document.getElementById('hikesList');
	let header = document.getElementById('header');
	let singleHikeDiv = document.getElementById('singleHikeDiv');
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
	elevation.textContent = "Elevation Gain: " + hike.elevation + "ft";
	let trailLength = document.getElementById('singleHikeTrailLength');
	trailLength.textContent = "Trail Length: " + hike.trailLength + "mi";
	let dogsAllowed = document.getElementById('singleHikeDogsAllowed');
	if (hike.dogsAllowed) {
		dogsAllowed.textContent = "Dogs are allowed.";
	} else {
		dogsAllowed.textContent = "No dogs allowed.";
	}
	let averagePace = document.getElementById('singleHikeAveragePace');
	averagePace.textContent = "The average hiker can complete this hike in: " + (hike.trailLength / 2) + " hrs."
	let maps = document.getElementById('singleHikeMap');
	//TODO ADD MAPS
	let deleteBtn = document.createElement('input');
	deleteBtn.type = 'submit';
	deleteBtn.value = 'DELETE';
	deleteBtn.className = "btn btn-danger";
	singleHikeDiv.appendChild(deleteBtn);
	////////// DELTE HIKE EVENT LISTENER //////////
	deleteBtn.addEventListener('click', function(e) {
		deleteHike(hike);
	});
	////////// HOME BUTTON //////////
	let homeBtnDiv = document.getElementById('homeButtonDiv');
	let homeBtn = document.createElement('input');
	homeBtn.type = 'submit';
	homeBtn.value = 'Home';
	homeBtn.className = "btn btn-info";
	homeBtnDiv.appendChild(homeBtn);
	homeBtn.addEventListener('click', function() {
		location.reload();
		init();
	});
	let updateBtn = document.createElement('input');
	updateBtn.type = 'submit';
	updateBtn.value = 'Update';
	updateBtn.className = 'btn btn-warning';
	singleHikeDiv.appendChild(updateBtn);
	updateBtn.addEventListener('click', function(e) {
		updateHike(hike);
	});
}

function deleteHike(hike) {
	if (confirm("Are you sure?")) {
		let xhr = new XMLHttpRequest();
		xhr.open('DELETE', 'api/hikes/' + hike.id);
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status === 200 || xhr.status === 204) {
					location.reload();
					init();
				} else {
					displayError('ERROR DELETING HIKE' + xhr.status);
				}
			}
		}//readystatechange end

		xhr.send();
	}
}//delete hike function end



/////////UPDATE HIKE //////////
function updateHike(hike) {
	
	let singleHikeData = document.getElementById('singleHikeDiv');
	singleHikeData.parentElement.removeChild(singleHikeData);
	let updateDiv = document.getElementById('updateSingleHikeDiv');
	let updateForm = document.getElementById('updateHikeForm');
	let name = document.createElement('input');
	let br = document.createElement('br');
	let label = document.createElement('h4');
	let label1 = document.createElement('h4');
	let label2 = document.createElement('h4');
	let label3 = document.createElement('h4');
	let label4 = document.createElement('h4');
	let label5 = document.createElement('h4');
	let label6 = document.createElement('h4');
	let label7 = document.createElement('h4');
	let label8 = document.createElement('h4');
	
	label.textContent='Name';
	updateForm.appendChild(label);
	name.type = 'text';
	name.value = hike.name;
	name.className='form-control';
	updateForm.appendChild(name);
	
	label1.textContent='Description';
	updateForm.appendChild(label1);
	let description = document.createElement('textarea');
	description.rows=3;
	description.cols=50;
	description.value=hike.description;
	description.appendChild(br);
	updateForm.appendChild(description);
	
	label2.textContent='Difficulty';
	updateForm.appendChild(label2);
	let difficulty = document.createElement('input');
	difficulty.type='number';
	difficulty.max=5;
	difficulty.min=1;
	difficulty.value=hike.difficulty;
	updateForm.appendChild(difficulty);

	label3.textContent="Latitude";
	updateForm.appendChild(label3);
	let lat = document.createElement('input');
	lat.type='number';
	lat.value=hike.latitude;
	updateForm.appendChild(lat);
	
	label4.textContent="Longitude";
	updateForm.appendChild(label4);
	let long = document.createElement('input');
	long.type='number';
	long.value=hike.longitude;
	updateForm.appendChild(long);
	
	label5.textContent="Elevation Gain";
	updateForm.appendChild(label5);
	let ele = document.createElement('input');
	ele.type='number';
	ele.value=hike.elevation;
	updateForm.appendChild(ele);
	
	label6.textContent="Trail Length in Miles";
	updateForm.appendChild(label6);
	let length = document.createElement('input');
	length.type='number';
	length.value=hike.trailLength;
	updateForm.appendChild(length);
	
	label7.textContent="Are Dogs Allowed";
	updateForm.appendChild(label7);
	let dogs = document.createElement('select');
	let yes = document.createElement('option');
	yes.value='true';
	yes.text='Yes';
	dogs.appendChild(yes);
	let no = document.createElement('option');
	no.value='false';
	no.text='No';
	dogs.appendChild(no);
	updateForm.appendChild(dogs);
	
	label8.textContent="Image Url"
	updateForm.appendChild(label8);
	let img = document.createElement('input');
	img.type='text';
	img.className='form-control';
	img.value=hike.imageUrl;
	updateForm.appendChild(img);
	
	let updateBtn = document.createElement('input');
	updateBtn.type='submit';
	updateBtn.value='Update'
	updateForm.appendChild(updateBtn);
	updateDiv.appendChild(updateForm);
}

///////// ERROR MSG FUNCTION //////////
function displayError(msg) {
	let hikesList = document.getElementById('hikesList');
	hikesList.textContent = '';
	hikesList.textContent = msg;
}











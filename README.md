# EventTrackerProject

#### Link
http://184.169.170.189:8080/HikeTracker/

## Overview
In this project, a user can search for hikes and view a picture of the hike along with its location, description, 1 to 5 level of difficulty, if they can bring their dog along and the length of the hike. A user can also create/update/delete a selected hike. If they do not find a hike in the search, then an empty list will be returned. However, if the user attempts to update/delete a hike that does not exist in the database, then a corresponding HTTP status code will be returned.

(JAVASCRIPT FRONT END)
An individual hikes page will also have 'aggregated data' showing the user how long it would take the average person to complete that hike. I found this data by dividing the hikes trail length by the average hiking pace, (2mph according to The New York Times). One of my goals in this project was to keep it as dynamic as possible, growing and shrinking the single HTML as a user selects what they want to see. I did this by using DOM manipulation and assigning empty textContent to the items that I did not want to display depending on the users selection.

(ANGULAR FRONT END)
A user can click on a list of difficulty levels and the hikes with that difficulty level will appear in a table format for the user to select from. The user also has a search bar function to find a hike by a keyword in the title or description of a hike. The user also has a nav bar to see a little bit about why I created this website and the plans I have for it in the future.
-----
## Technology Used
* Java
* JavaScript
* VsCode
* Angular
* AWS EC2
* Zsh/Bash
* Bootstrap
* Git
* Gradle
* Postman
* JPA
* MySql Work bench
* Spring
* Spring Boot
-----
## Lessons Learned
### HTTPServletResponse & HTTPServletRequest
* I was having issues with creating a "Location" header and having it appear in Postman, also choosing what status code to set the Response to depending on the issue caused by a bad CRUD operation, I used the REST API tutorial to determine what status should be thrown.
### Postman
* Working with a new API can be challenging at first but after a while I got the hang of it and found it very useful, especially in the development phase of mapping and getting the basic operations functioning correctly.
### removeChild
* Early on I was encountering a lot of issues while keeping my project dynamic because when I would switch from displaying all of the hikes to displaying only one I was using removeChild instead of just setting its textContent to an empty String. I wanted to re use my create a hike form as the update form but was unable to because of it being removed. I caught this after I had already created another form for update but now I know and will be sure to use the elements textContent the first time in the future.
### Submit vs Button
* When trying to add search methods I was getting page refreshes instead of actually searching for the term provided, after many google searches I found that submit types will refresh by default so in order to change that I had to swap my search submits for search buttons. It was an easy fix and did not cause much trouble but it is good to know that submit types will naturally refresh the page.
### CSS Styling
* The biggest struggle I had was honestly the styling. In the end the sites style still did not turn out exactly how I wanted it and while that is frustrating I am happy with how the functionality turned out.
### Angular
* When we first started with Angular I did not like it at all, I thought the syntax was strange and I didn't understand much, but after this project I feel a lot more comfortable with it and want to learn more about it. It was very helpful and easy to work with the ``(*ng If)`` is one of the most useful and easy to work with things I have encountered so far, I am excited to see what other functionalities Angular has!
-----
## Mappings
| HTTP Verb | URI                                       | Request Body            | Response Body  | Purpose                             |
|-----------|-------------------------------------------|-------------------------|----------------|-------------------------------------|
| GET       | `/api/hikes`                              |                         | List of hikes  | **List** or **collection** endpoint |
| GET       | `/api/hikes/search/{keyword}`             |                         | List of hikes  | **Retrieve** endpoint               |
| GET       | `/api/hikes/search/length/{low}/{high}`   |                         | List of hikes  | **Retrieve** endpoint               |
| GET       | `/api/hikes/search/difficulty/{num}`      |                         | List of hikes  | **Retrieve** endpoint               |
| POST      | `/api/recipes`                            | JSON for a new Hike     | Created hike   | **Create** endpoint                 |
| PUT       | `/api/recipes/{id}`                       | JSON for updating Hike  | Updated hike   | **Replace** or **Update** endpoint  |
| DELETE    | `/api/recipes/{id}`                       |                         |                | **Delete** a hike                   |
-----
### Things I would change In future Projects
In the first stages of this project I added a lot of search methods for a user but ended up only adding two of them, my goal was to have a very interactive site with a lot of abilities however in the later stages I did not like only having 'searching' abilities. For future projects I want to incorporate other more interesting functions such as a rating ability or a favorites function.

In the future for this project I want to add user logging in and out functionality, I think it makes a site a lot friendlier and interesting when a user can log in and see a nice welcoming account page and have functions such as a favorites list or a comments list.

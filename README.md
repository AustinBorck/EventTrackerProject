# EventTrackerProject

### Link

## Overview
In this project, a user can search for hikes and view a picture of the hike along with its location, description, 1 to 5 level of difficulty, if they can bring their dog along and the length of the hike. A user can also create/update/delete a selected hike. If they do not find a hike in the search, then an empty list will be returned. However, if the user attempts to update/delete a hike that does not exist in the database, then a corresponding HTTP status code will be returned.
## Technology Used
* Git
* Gradle
* Postman
* JPA
* MySql Work bench
* Java
* Spring
* Spring Boot

## Lessons Learned
### HTTPServletResponse & HTTPServletRequest
* I was having issues with creating a "Location" header and having it appear in Postman, also choosing what status code to set the Response to depending on the issue caused by a bad CRUD operation, I used the REST API tutorial to determine what status should be thrown.
### Postman
* Working with a new API can be challenging at first but after a while I got the hang of it and found it very useful, especially in the development phase of mapping and getting the basic operations functioning correctly. 

## Mapping
| HTTP Verb | URI                                       | Request Body            | Response Body  | Purpose                             |
|-----------|-------------------------------------------|-------------------------|----------------|-------------------------------------|
| GET       | `/api/hikes`                              |                         | List of hikes  | **List** or **collection** endpoint |
| GET       | `/api/hikes/search/{keyword}`             |                         | List of hikes  | **Retrieve** endpoint               |
| GET       | `/api/hikes/search/length/{low}/{high}`   |                         | List of hikes  | **Retrieve** endpoint               |
| GET       | `/api/hikes/search/difficulty/{num}`      |                         | List of hikes  | **Retrieve** endpoint               |
| POST      | `/api/recipes`                            | JSON for a new Hike     | Created hike   | **Create** endpoint                 |
| PUT       | `/api/recipes/{id}`                       | JSON for updating Hike  | Updated hike   | **Replace** or **Update** endpoint  |
| DELETE    | `/api/recipes/{id}`                       |                         |                | **Delete** a hike                   |

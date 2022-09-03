# EventTrackerProject

### Link

## Overview
In this project a user can search for hikes and view a picture of the hike along with its location, description, 1 to 5 level of difficulty, if they can bring their dog along and the length of the hike. A user can also create/update/delete a selected hike.
## Technology Used
* Git
* Gradle
* Postman
* JPA
* MySql Workbench
* Java
* Spring
* Spring Boot

## Lessons Learned

## Mapping
| HTTP Verb | URI                                       | Request Body            | Response Body  | Purpose                             |
|-----------|-------------------------------------------|-------------------------|----------------|-------------------------------------|
| GET       | `/api/hikes`                              |                         | List of Hikes  | **List** or **collection** endpoint |
| GET       | `/api/hikes/search/{keyword}`             |                         | Single recipe  | **Retrieve** endpoint               |
| GET       | `/api/hikes/search/length/{low}/{high}`   |                         | Single recipe  | **Retrieve** endpoint               |
| GET       | `/api/hikes/search/difficulty/{num}`      |                         | Single recipe  | **Retrieve** endpoint               |
| POST      | `/api/recipes`                            | JSON for a new Hike     | Created recipe | **Create** endpoint                 |
| PUT       | `/api/recipes/{id}`                       | JSON for updating Hike  | Updated recipe | **Replace** or **Update** endpoint  |
| DELETE    | `/api/recipes/{id}`                       |                         |                | **Delete** a hike                   |

# Angular Training Assessment

 This applications consists of a backend (API folder) and frontend (myapp) folder. The frontend folder is the angular application which is used for implementing the 
 - Home Page
 - Login Page -> which leads into the User Registration Page.
 - User List Page -> from where we can see more information about each user (implemented by using GET request inputing a particular id).

One has to login for user registration :
- Username - admin
- Password - 12345 
(Use the above username and password to login)

After logging in users can be registered using the POST request. Once the user is registered, the page gets redirected to the User details View page and all the user details can be viewed there (This is implemented using the GET request). Validation for the input fields is also implemented in the Login and Registration page.

Routing has also been implemented to redirect the user to each page.

Unit testing has been implemented for the GET and POST request in the user.service.spec.ts file.

The API folder consists of the node backend used for connecting the frontend to the database and implementing the GET and POST requests.

# Use 'ng serve' on console from the myapp folder directory to run the angular application in myapp folder.
While uploading on github, the **node_modules folder is ignored** as it is very big so on cloning(or after downloading as zip) add the node modules folder to the project to make it run. To do it, just **delete the package-lock.json file** and **run "npm install"** to add the node_modules folder.(I have uploaded the node_modules folder too here so **not required**)

# Use 'npm start' on console from the API folder directory to run the node application.
While uploading on github, the **node_modules folder is ignored** as it is very big so on cloning(or after downloading as zip) add the node modules folder to the project to make it run. To do it, just **delete the package-lock.json file** and **run "npm install"** to add the node_modules folder.(I have uploaded the node_modules folder too here so **not required**)

# Use 'ng test' on console from the myapp folder directory to do unit testing.

# Screenshots of the application

# Home Page
![Home page](https://user-images.githubusercontent.com/90870014/142449410-94a0f764-c2ce-443a-bc49-3c5d8795d5bf.jpeg)

# Login Page
![Login page](https://user-images.githubusercontent.com/90870014/142449466-48f91287-bce9-425b-b01d-8e3dc75e88c8.jpeg)

# Registration Page
![Registration page](https://user-images.githubusercontent.com/90870014/142449612-a13a19fa-bdb3-4584-b9aa-6e3feaefaf63.jpeg)

# User List Page
![User list page](https://user-images.githubusercontent.com/90870014/142449701-ee0ed34a-21af-4d8c-82b7-264115bff09c.jpeg)

# User Details Page
![User details page](https://user-images.githubusercontent.com/90870014/142449775-7cd1f0df-990d-4c07-bc4f-a9f4d57035c6.jpeg)

# Testing
![Testing](https://user-images.githubusercontent.com/90870014/142579207-89732d31-41ce-4753-bee3-c8598871c925.JPG)



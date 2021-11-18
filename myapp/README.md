# Angular Training Assessment
_______________________________

 This applications consists of a backend (API folder) and frontend (myapp) folder. The frontend folder is the angular application which is used for implementing the 
 - Home Page
 - Login Page -> which leads into the User Registration Page.
 - User List Page -> from where we can see more information about each user (implemented by using GET request inputing a particular id).

One has to login for user registration :
- Username - admin
- Password - 12345 
(Use the above username and password to login)

After logging in users can be registered using the POST request. Once the user is registered, the page gets redirected to the User details View page and all the user details can be viewed there (This is implemented using the GET request). 

Routing has also been implemented to redirect the user to each page.

Unit testing has been implemented for the GET and POST request in the user.service.spec.ts file.

The API folder consists of the node backend used for connecting the frontend to the database and implementing the GET and POST requests.

# Use ng serve to run the angular application in myapp folder.

# Use npm start to run the node application.

# Use ng test to do unit testing.

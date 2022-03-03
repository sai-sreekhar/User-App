#Description:

**Question 1**: Retrieve the data of all the users from the json file and send the response back.\
**HTTP Message Type**: GET\
api endpoint: https://users-app-ss.herokuapp.com/api/users

Question 2: Retrieve Leo Gillespie’s data from the json file and send the response back. 
HTTP Message Type: GET
Note: Leo Gillespie’s Id is sent in path
api endpoint: https://users-app-ss.herokuapp.com/api/users/5c8a1f292f8fb814b56fa184

Question 3: Change Ben Hadley’s role to lead-guide and send the updated data of all the users.
HTTP Message Type: POST
HTTP Request Body: None
Note:  Ben Hadley’s role Id is sent in path.
api endpoint: https://saisreekar-usersapi.herokuapp.com/api/changerole/5c8a23412f8fb814b56fa18c

Question 4: Create a new user with any sample data of your choice and write it to a new file called newUser.json.
HTTP Message Type: POST
HTTP Request Body: 
{
    "_id": "5c8fejfejhe",
    "name": "Sai Sreekar",
    "email": "sai@example.com",
    "role": "lead-guide",
    "active": true,
    "password": "1vpTUZc4d45oiT4GOZQe1kS"
  }
Note: New User Data issent as HTTP Body. 
api endpoint: https://users-app-ss.herokuapp.com/api/user

newUser.json can be queried with the below endpoint
api endpoint: https://users-app-ss.herokuapp.com/api/newuser

Question 5: Delete Eliana Stout’s data from the json file and write the data of remaining users into a file called deletedUser.json.
HTTP Message Type: DELETE
HTTP Request Body: None
Note: Id of user to delete is sent in path.
api endpoint: https://users-app-ss.herokuapp.com/api/users/5c8a20d32f8fb814b56fa187

deletedUser.json can be queried with the below endpoint
api endpoint: https://users-app-ss.herokuapp.com/api/getUsersAfterDeletion






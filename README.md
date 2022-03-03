# Description:

**Question 1**: Retrieve the data of all the users from the json file and send the response back.\
**HTTP Message Type**: GET\
**api endpoint**: https://users-app-ss.herokuapp.com/api/users \
![Alt Text](https://github.com/sai-sreekhar/User-App/blob/main/screenshots/Level-1%20Question-1.jpg)

**Question 2**: Retrieve Leo Gillespie’s data from the json file and send the response back.\
**HTTP Message Type**: GET\
**Note**: Leo Gillespie’s Id is sent in path.\
**api endpoint**: https://users-app-ss.herokuapp.com/api/users/5c8a1f292f8fb814b56fa184 \
![Alt Text](https://github.com/sai-sreekhar/User-App/blob/main/screenshots/Level-1%20Question-2%20(user%20id%20to%20fetch%20is%20sent%20in%20path).jpg)

**Question 3**: Change Ben Hadley’s role to lead-guide and send the updated data of all the users.\
**HTTP Message Type**: POST\
**HTTP Request Body**: None\
**Note**:  Ben Hadley’s role Id is sent in path.\
**api endpoint**: https://saisreekar-usersapi.herokuapp.com/api/changerole/5c8a23412f8fb814b56fa18c \
![Alt Text](https://github.com/sai-sreekhar/User-App/blob/main/screenshots/Level-1%20Question-3%20(user%20id%20is%20sent%20in%20path).jpg)

**Question 4**: Create a new user with any sample data of your choice and write it to a new file called newUser.json.\
**HTTP Message Type**: POST\
**HTTP Request Body**: 
{
    "_id": "5c8fejfejhe",
    "name": "Sai Sreekar",
    "email": "sai@example.com",
    "role": "lead-guide",
    "active": true,
    "password": "1vpTUZc4d45oiT4GOZQe1kS"
  }\
**Note**: New User Data issent as HTTP Body.\
**api endpoint**: https://users-app-ss.herokuapp.com/api/user \
![Alt Text](https://github.com/sai-sreekhar/User-App/blob/main/screenshots/Level-1%20Question-4%20(user%20data%20sent%20in%20post%20body).jpg)

newUser.json can be queried with the below endpoint\
**api endpoint**: https://users-app-ss.herokuapp.com/api/newuser \
![Alt Text](https://github.com/sai-sreekhar/User-App/blob/main/screenshots/Level-1%20Question-4a%20(newUser.json%20is%20queried%20using%20api).jpg)

**Question 5**: Delete Eliana Stout’s data from the json file and write the data of remaining users into a file called deletedUser.json.\
**HTTP Message Type**: DELETE\
**HTTP Request Body**: None\
**Note**: Id of user to delete is sent in path.\
**api endpoint**: https://users-app-ss.herokuapp.com/api/users/5c8a20d32f8fb814b56fa187 \
![Alt Text](https://github.com/sai-sreekhar/User-App/blob/main/screenshots/Level-1%20Question-5%20(user%20id%20to%20delete%20is%20passed%20in%20path).jpg)

deletedUser.json can be queried with the below endpoint\
**api endpoint**: https://users-app-ss.herokuapp.com/api/getUsersAfterDeletion \
![Alt Text](https://github.com/sai-sreekhar/User-App/blob/main/screenshots/Level-1%20Question-5a%20(deletedUser.json%20is%20queried%20using%20api).jpg)






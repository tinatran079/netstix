# January 6, 2023

Today, I worked on:

* Completing project set up with the group

We worked as a group to set up our project. We started by adding our database to our application. The last step was to configure the yaml file with the necessary services.

# January 9, 2023

Today, I worked on:

* Created models and finished one route

We worked as a group to create 2 models, users, and reviews. We were able to finish a route for creating a user.

# January 10, 2023

Today, I worked on:

* Configuring post request for user

We were getting a 422 error whenever we tried to post a user. It seems like we were not able to successfully connect to our database.

# January 11, 2023

Today, I worked on:

* Fixing the post user error and finished CRUD for users

We worked as a group to figure out what the issue was with the 422 error. Griffin figured out it was an indentation issue where our 'with conn.cursor()' call was outside the scope where the cursor is defined.

# January 12, 2023
Today, I worked on:

* Updated the reviews model and finished CRUD for reviews

We worked as a group on updating the reviews model. Some of the fields in our model had to be added or removed. We also finished all the CRUD necessary for reviews that a user may access on the front end.

# January 13, 2023
Today, I worked on:

* Fetching and searching for games from our 3rd party API

We worked on adding routes for our games API. We were able to fetch a list of games based on the name and search for a game.

# January 17, 2023
Today, I worked on:

* Refactored users and accounts models. Finished back-end authentication

We had to refactor our users and accounts models in order to complete our back-end authentication. We were able to have functional login and logout endpoints for our accounts model.

# January 18, 2023
Today, I worked on:

* Sign up/login functionality for the front-end

We worked on connecting back-end authentication to our front-end. A user is able to successfully log in or sign up.

# January 20, 2023
Today, I worked on:

* Logout functionality for the front-end

We worked on logging a user out. We had to configure some parts of the authentication file for the log out functionality to work.

# January 23, 2023
Today, I worked on:

* Refactored accounts and users

We added foreign key relationships to connect an account to a user. We also added more functionality to the details page for games.

# January 24, 2023
Today, I worked on:

* Completed our reviews form

We worked to get our review form to successfully connect to the database and post a review.

# January 25, 2023
Today, I worked on:

* Added review cards to details page.

We added review cards for each user to the details page with their corresponding username. We then configured the nav bar to show only the main page and the logout links when a user is logged in.

# January 26, 2023
Today, I worked on:

* Removed users model and changes to the detail page

We worked on removing our users model as it was redundant. We also made some changes to the details page. Reviews from each user now reloads automatically to the page whenever a user creates a review.

# January 27, 2023
Today, I worked on:

* Finishing the readme file

We worked together to finish up the readme file with all its necessary components.

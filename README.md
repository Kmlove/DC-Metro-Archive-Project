# DC-Metro-Archive-Project

## UserStory
The DC Museum Archive is a rating application for museums in the nation's capital.

The landing page will display a random recommended museum of the day. Using the navbar at the top a user can find a specific museum, or add a museum missing from the database. Users will be able to review and rate the museums available. They can also update or delete their own reviews on the site and remove museums that have closed. We hope you enjoy your visit to DC and its wonderfull museums!

## Database
We will be creating our own db.json that will look similar to below:
![image](https://github.com/Kmlove/DC-Metro-Archive-Project/assets/106281281/5ebcc3ff-0294-4fd4-a431-64c8fe2d1dab)

## MVP
User will be able to:
* C: Add a new museuem to the site 
* R: Read information on each musuem, including other users comments and ratings
* U: Users can comment and rate musuems they have vistited 
* D: Users can remove museums that have shut down
 
Client Side Routing & Purpose:
* Landing page with recommended musuem of the day - path = "/"
* Museum Lists - path = "/musuems"
* Specific Museum - path = "/musuems/:id"
* Adding Museum - path = "/musuems/new"

Components:
* App
  * PageRender
    * Home
    * MusuemList
      * MusuemCard
    * MusuemForm
    * SpecificMusuem
      * CommentForm
      * CommentCard


## Strech Goals
1. Updating a Musuem instead of removing and adding a new one
2. Admission Filters
3. Search by keywords from description

## WireFrame
![image](https://github.com/Kmlove/DC-Metro-Archive-Project/assets/106281281/f5e1d3b6-15fb-492b-b74a-034addd8d624)

## Trello Board
![image](https://github.com/Kmlove/DC-Metro-Archive-Project/assets/106281281/747c2f2b-8363-40e9-a136-16fc8a607324)

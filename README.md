# DC-Museum-Archive-Project

## UserStory
The DC Museum Archive is a rating application for museums in the nation's capital.

The landing page will display a random recommended museum of the day. Using the navbar at the top a user can find a specific museum, or add a museum missing from the database. Users will be able to review and rate the museums available. They can also update or delete their own reviews on the site and remove museums that have closed. We hope you enjoy your visit to DC and its wonderfull museums! Check out the video below showing the site in action!

## Website Demo Video
[DCMA Demo Video](https://youtu.be/LUXA4KcCaxI)

## Database
We will be creating our own db.json that will look similar to below:
![image](https://github.com/Kmlove/DC-Metro-Archive-Project/assets/139454639/5aacb8b1-364d-4660-aa2f-e6a441f5ab1c)

## MVP
User will be able to:
* C: Add a new museum to the site 
* R: Read information on each museum, including other users comments and ratings
* U: Users can comment and rate museums they have vistited 
* D: Users can remove museums that have shut down
 
Client Side Routing & Purpose:
* Landing page with recommended museum of the day - path = "/"
* Museum Lists - path = "/museums"
* Specific Museum - path = "/museums/:id"
* Adding Museum - path = "/museums/new"

Components:
* App
  * PageRender
    * Navbar
    * Home
    * MuseumList
      * MuseumCard
    * MuseumForm
    * SpecificMuseum
      * CommentForm
      * CommentCard


## Strech Goals
1. Updating a Museum instead of removing and adding a new one
2. Admission Filters
3. Search by keywords from description

## WireFrame
![DCMA Wireframe](https://github.com/Kmlove/DC-Metro-Archive-Project/assets/139454639/f8c8ad4f-59fd-4566-b684-68d458216827)
![DCMA Specifiiiiiiiiiic Musuem Wireframe](https://github.com/Kmlove/DC-Metro-Archive-Project/assets/139454639/f6071c4b-d8a4-4847-b8be-e33b733cd254)


## Trello Board
![image](https://github.com/Kmlove/DC-Metro-Archive-Project/assets/106281281/747c2f2b-8363-40e9-a136-16fc8a607324)

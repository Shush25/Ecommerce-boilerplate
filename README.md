# Ecommerce (React) Coding Assessment

## Overview

The Page is hosted at: (https://shush25.github.io/Ecommerce-boilerplate/).
The Server is hosted in Heroku at: (https://shush-assignment-1.herokuapp.com/)

The App was build while also taking mobile view in consideration. So, it will not be 100% mobile friendly but enough to get the job done.

![image](https://user-images.githubusercontent.com/61841380/181870989-ef217492-099f-4582-b81f-a8f32a91e22e.png)

This is a screenshot of The landing page which is login. Only Login and Register Pages are accessible at the start. Until the user is authenticated they will not be allowed to view other pages.

![image](https://user-images.githubusercontent.com/61841380/181871025-4b896f5f-6ae8-4816-8f8c-d59e806ff7ad.png)

This is the Register Page, both the Login and Register Pages are fully functioning with user authentication done using REST API hosted on herokuapp. 
Please make sure to manually click on the button since, enter key was not handled.
Only after gettting a positive message from api of users existence in db will they be allowed to enter into the homepage. The userd Unique Id is stored via context. Now, until the user logs out they will not be allowed to access the login page. 

In the HomePage the products in our data is spredout and show in the form of cards with there respective image, title and price. One can add them into there cart by clicking on the card icon on the right hand corner. 

One item can only be added once into the cart. Further clicking will not show any changes...
If a user wants to set the quantity they wanna buy then they can navigate to cart to set the required quantity.

The cart icon on the top also displays the number of unique producted added to the cart.

![image](https://user-images.githubusercontent.com/61841380/181871275-5f71bab2-1f07-4022-a78d-9d60a9e63aed.png)


On clicking on the Faviourite Icon one can add then to there faviourite list which is maintained in the db using POST request. The removal of favourites and all time display was not implemented due to time constraint

Cart Page Shows the Total Cost along with total number of Items in the cart with there respective quantities.

![image](https://user-images.githubusercontent.com/61841380/181871306-d01c7c76-3fe8-4242-a660-d4a9b2201114.png)

Once, the quantity of an item hits 0 it is removed from the cart list. The total cost incurd can be seen on the right hand side. The designing of Price Details is not fully completed.

After user clicks on Place Order button an API request is sent to the server and if gets successful the order is placed otherwise the user has to try again.

![image](https://user-images.githubusercontent.com/61841380/181871372-724615be-2c90-4105-b791-39871a76a4ee.png)

After the order is placed it gets recorded in the db. At the same time the cart is flushed and only the Price Details remains so that user can see the total cost incurred.

On pressing the logout button the user state is set to null causing the user to get redirected back to the login Page.



### Login/Register page

<img width="1512" alt="Screenshot 2022-07-24 at 10 44 13 AM" src="https://user-images.githubusercontent.com/52570524/180701451-5ccce009-0384-426c-b1bc-d7536fd7b142.png">


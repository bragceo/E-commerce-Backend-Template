# E-commerce-Backend-Template

## Description 

The following is the back end for an e-commerce site. 

## User Story

AS A manager at an internet retail company <br>
I WANT a back end for my e-commerce website that uses the latest technologies <br>
SO THAT my company can compete with other e-commerce companies <br>

## Acceptance Criteria

GIVEN a functional Express.js API <br>
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file <br>
THEN I am able to connect to a database using Sequelize <br>
WHEN I enter schema and seed commands <br>
THEN a development database is created and is seeded with test data <br>
WHEN I enter the command to invoke the application <br>
THEN my server is started and the Sequelize models are synced to the MySQL database <br>
WHEN I open API GET routes in Insomnia Core for categories, products, or tags <br>
THEN the data for each of these routes is displayed in a formatted JSON <br>
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core <br>
THEN I am able to successfully create, update, and delete data in my database <br>


## Walk Through Video




## Github Repository

https://github.com/bragceo/E-commerce-Backend-Template



## Overview of Code structure and its components:

API endpoints for an e-commerce application. There are three main categories of the API endpoints for the e-commerce application: Category, Tag, and Product. 

Category Endpoints:

GET /api/categories/6: Fetches the details of the category with ID 6.
DELETE /api/categories/6: Deletes the category with ID 6.
POST /api/categories: Creates a new category with the provided category name in the request body.
PUT /api/categories/6: Updates the category with ID 6 with the new category name provided in the request body.
GET /api/categories: Fetches all categories.
Tag Endpoints:

GET /api/tags/9: Fetches the details of the tag with ID 9.
DELETE /api/tags/9: Deletes the tag with ID 9.
POST /api/tags: Creates a new tag with the provided tag name in the request body.
PUT /api/tags/9: Updates the tag with ID 9 with the new tag name provided in the request body.
GET /api/tags: Fetches all tags.
Product Endpoints:

GET /api/products/8: Fetches the details of the product with ID 8.
DELETE /api/products/7: Deletes the product with ID 7.
POST /api/products: Creates a new product with the provided product details in the request body.
PUT /api/products/8: Updates the product with ID 8 with the new product details provided in the request body.
GET /api/products: Fetches all products.
 

## How to run the application
We can use Insomnia Core to test API endpoints. 

Below is our step-by-step directions:

Download and Install Insomnia Core: 

Create a New Request: Open Insomnia Core, and click the '+' button on the left panel to create a new request. You'll be asked to give your request a name and select its type (GET, POST, PUT, DELETE, etc.). Choose the one you want to test.

Enter Your API Endpoint: In the URL bar at the top, enter the URL of your API endpoint you want to test. For example, if you're testing your local server, it might look something like http://localhost:3001/api/categories.

Add Request Body (for POST and PUT): If you're creating a POST or PUT request, you'll need to send data in the request body. To do this, click on the 'Body' tab below the URL bar, select 'JSON' as the type, and enter your JSON data in the provided text field.

Send the Request: Once you've set up your request, click the 'Send' button to send it. Insomnia will then show the HTTP response in the right panel. This includes the status code, headers, and response body.

Review the Response: Check the HTTP status code in the response. Codes in the 200 range typically indicate success, while codes in the 400 or 500 range indicate an error. Also, look at the response body to see if the data returned (if any) is what you expected.

Repeat: Repeat steps 2-6 for all the routes and request types you want to test. You can create folders to organize your requests and even create environments to easily switch between different sets of variables.


## Authors 

Lavell Juan <br>


## Credits 

N/a

## License 
Please refer to license in repo 

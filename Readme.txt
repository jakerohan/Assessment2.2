Readme for Assignment 2.2
==========================

This website was designed as an example for the hypothetical Harriet to use as 
an introduction & portfolio to show to potential clients. It also includes an
email form which her customers can use to enquire about her products or services
directly.


CSS:
-----
The page makes extensive use of CSS. The CSS code is held in a sepparate file to make it easier for
me to edit, and also to enable using it for multiple pages if the website grew beyond its current design.

The CSS design includes: 
a background image of woodgrain set to repeat
Font styles and colours
Header and footer background colours
Flex box for navigation bar
Button designs for the navigation bar
Curved image corners to soften the feel of the page
Padding


Javascript:
------------
The navigation through the page is handled through Javascript. Rather than using the navigation buttons to 
navigate to a sepparate html file, i decided to build the whole site into a single file, then use the navigation
buttons to trigger a script which would show/hide sections of the page. The pages of the website were created  
and sepparated into divs. When the page is first opened, all of the content and images are for all pages are 
loaded with it, however only the homepage div is visible. A Javascript function was created for each navigation 
button that hid all divs except for the one that had been selected. This method works great, however would not be 
scaleable if the website grew to a point where it was hosting its own videos, or the amount of images increased
to the point where the initial page load was compromised.

Another Javascript function was used on the contact page to create and pre-fill an email. there is more detail
provided bellow in the description of the Contact Page. 


The website is organised into 4 pages:

Home:
------
The landing page. this will be a short introduction of what the webpage provides, and 
what services and products Harriet would be selling.

About Me:
----------
This is where Harriet would provide a bit of history on herself, and what inspires her art.

Projects:
----------
A good place for Harriet to showcase some of her past and current projects.

It is intended for this page to have a slideshow which the user can navigate through, however my 
inexperience with javascript has held me back, and I was unable to complete it in time for submission.
I plan on completing the slideshow in my own time, so I have left the code in the html, js & css files.

In place of the slideshow there are 2 images in keeping with the design of the Home and About Me pages.

Contact:
---------
Potential customers can use this page to contact Harriet in order to enquire about her business.
There is a phone number avaliable for them to call her, other wise they can use the form provided.

The contact form takes the information provided and uses it to pre-fill an email in their 
installed email client. This is achieved by running a function when the 'submit' button is clicked.
The function will use 'mailto:' to open the email client and prefill my email address. It will then
take the text that has been entered into the fields and fill the email subject and body. I was intending
to create an email signature for the person using the name, email and phone number they have provided however 
trying to add multiple values into the body of the email broke my script.

Idealy, this would eventually use PHP and not need to open the local email client, however this will be 
adequate to show the design.


Resources: 
-----------

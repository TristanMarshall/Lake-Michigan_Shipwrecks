# Lake Michigan Shipwrecks
#####WDI project #3 / Lake Michigan Shipwrecks

## Lake Michigan Shipwrecks

##### This is the readme.md file for the Lake Michigan Shipwrecks. The primary purpose of this site is to showcase an example of rendering data from a REST API using Backbone. The REST API was built out with data found from several sources, primarily Wikipedia.com, and The Michigan Shipwreck Research Association.

##### Lake Michigan Shipwrecks allows the user to do the following:
* Interact with a Google Map
* Interact with Google Map Markers that when clicked, render data into page.
* View a rendered list of data of all known Shipwrecks in Lake Michigan.

##Installation Instructions
* Go to https://github.com/TristanMarshall/Lake-Michigan_Shipwrecks , Copy the SSH key to your clipboard.
* In your terminal:
  - git clone (SSH key)
  - rake db:create
  - rake db:migrate
* Populate database with data found in migration.sql.
* In your terminal:
  - bundle
  - rails s
* Go to localhost:3000/

## Technologies used in creating this site:

* HTML5
* CSS
* Javascript
* jQuery
* Ruby on Rails
* Postgres
* SQL
* Active Record
* Backbone
* Inkscape
* Google Maps
--
*Google Fonts used on this website (Cinzel & Abel)*


### The site includes 3 .erb pages:

![alt image](http://i.imgur.com/cSgwgh2.jpg)
* Welcome (welcome.html.erb)

![](http://i.imgur.com/83Ob4ao.jpg)
* Home (index.html.erb)

![](http://i.imgur.com/p0QJjsN.png)
* Data (data.html.erb)

###Application Layout
![](http://i.imgur.com/TIRU82O.jpg)




###### This application was created by Tristan Marshall


















insert into api_keys (access_token, created_at, updated_at) values ('b96e5fe0e1e3829587bd11767059564d', current_date, current_date);

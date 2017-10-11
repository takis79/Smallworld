import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'tango_with_django_project.settings')

import django
django.setup()

from rango.models import Category, Page

def populate():
    

    django_pages = [
		{"title":"Grand Theatre",
	        "address":"33 Church St, Blackpool, Lancashire, FY1 1HT", "lng": -3.053102,"lat": 53.817260},
		{"title":"Claremont Theatre Club",
	        "address":"Burwood Dr, Blackpool, Lancashire, FY3 8NS", "lng": -3.049690,"lat":53.829649 },
		{"title":"Pendle Productions",
	        "address":"249 Hawes Side La, Blackpool, Lancashire, FY4 4AA", "lng": -3.030698,"lat":53.794399 },
		{"title":"Tram Shed Theatre",
	        "address":"7 Moor Pk Av, Blackpool, Lancashire, FY2 0LT", "lng": -3.034974,"lat":53.845938 },
		{"title":"Thornton Little Theatre",
	        "address":"Fleetwood Road North, Thornton Cleveleys, FY5 3SZ", "lng":-3.010607 ,"lat": 53.872058},    ]

    
    cats = {
			"apoel": {"pages": django_pages, "views": 64, "likes": 32},
            }
    
    # if you want to add more catergories or pages, add them to the dictionaries above
	
	# The code below goes through the cats dictionary, then adds each category,
	# and then adds all the associated pages for that category
	# if you are using Python 2.x then use cats.iteritems() see
	# http://docs.quantifiedcode.com/python-anti-patterns/readability/not_using_items_to_iterate_over_a_dictionary.html
	# for more information about using items() and how to iterate over a dictionary properly
    
    # Using the .items returns the key and the value. In this case the key is "Python", "Django" or "Other Frameworks" and the value (cat_data) is the corresponding dictionary in cats.
    for cat, cat_data in cats.items():
        # c = add_cat(cat)
        # Updated the population script to pass through the specific values for views and likes
        c = add_cat(cat, cat_data["views"], cat_data["likes"])
        for p in cat_data["pages"]:
            add_page(c, p["title"], p["lng"], p["lat"], p["address"])
    
    # Print out what we have added to the user.
    for c in Category.objects.all():
        for p in Page.objects.filter(category=c):
            print("- {0} - {1}".format(str(c), str(p)))

def add_page(cat, title, lng, lat,address):
    p = Page.objects.get_or_create(category=cat, title=title)[0]
    p.lng=lng
    p.lat=lat
    p.address=address
    # we need to save the changes we made!!
    p.save()
    return p

def add_cat(name, views=0, likes=0):
    c = Category.objects.get_or_create(name=name)[0]
    c.views=views
    c.likes=likes
    c.save()
    return c

# Start execution here!
if __name__ == '__main__':
    print("Starting Rango population script...")
    populate()
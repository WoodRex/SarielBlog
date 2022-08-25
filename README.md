## RedwoodJS Simple Blog

> ⚠️ It's in progress. Until that time, I recommend checking out [other example projects](https://github.com/redwoodjs?q=example-).

![frontend1](https://user-images.githubusercontent.com/70128487/186114165-f9ee2c1c-2b72-4415-8004-9e855bfb33ee.PNG)
![backend1](https://user-images.githubusercontent.com/70128487/186114185-98ce8391-56ce-44de-bb4d-2c396d435e00.PNG)


## Overview

Many thanks to RedwoodJS and [RedwoodJS Example Blog](https://github.com/redwoodjs/example-blog).

Here is a featured blog re-written in RedwoodJS Example Blog.
Different from that, the Authentication section is using dbAuth and a local database.

It includes:

* Listing all blog posts and pagination (homepage)
* Reading a single, full blog post
* Searching for blog posts by keyword (Not yet Finish)
* Displaying all posts with a given category
* Responsive viewport

The admin backend includes:

* User authentication
* Create a new blog post with:
    * Title
    * Body
    * Category
* Edit existing blog post
* Delete a blog post
* Richtext editor (Not yet Finish)
* Publish a post live

On the tech side:

* Data stored in a SQL database (SQLite locally)
* User authentication using dbAuth
* CSS styling via [TailwindCSS](https://tailwindcss.com)

### Installation

clone this repo

```
git clone https://github.com/WoodRex/simple-redwood-blog.git
cd simple-redwood-blog
```

Install depenencies, than migrate SQLite database and generate secret
```
yarn rw prisma migrate dev
yarn rw g secret
```

Don't forget to copy the secret and add a line in .env
```
SESSION_SECRET=(Generated Key)
```

Then start the development server:

```
yarn redwood dev
```

Please be reminded that the browser would not automatically open.
Go to http://localhost:8910/ and you will see the home page of blog.

To create post, you must create category first!!

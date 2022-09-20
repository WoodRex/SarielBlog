## SarielBlog
{{ site.description}}

⚠️ Upgraded environment to redwoodJS 3.1

![Frontend](https://user-images.githubusercontent.com/70128487/190884508-407d69d0-518c-4dc8-bb01-7805817a3b16.png)

![Backend](https://user-images.githubusercontent.com/70128487/190848164-f6d03406-3d6a-4341-868d-30176485769a.png)


## Overview

Many thanks to RedwoodJS and [RedwoodJS Example Blog](https://github.com/redwoodjs/example-blog).

Here is a featured blog re-written in RedwoodJS Example Blog.
Different from that, the Authentication section is using dbAuth and a local database.

It includes:

* Listing all blog posts and pagination (homepage)
* Reading a single, full blog post
* Searching for blog posts by keyword
* Displaying all posts with a given category
* Responsive viewport

The admin backend includes:

* User authentication
* Create a new blog post with:
    * Title
    * Author
    * Body
    * Category
* Edit existing blog post
* Delete a blog post
* Richtext editor
* Publish a post live

On the tech side:

* Data stored in a SQL database (SQLite locally)
* User authentication using dbAuth
* CSS styling via [TailwindCSS](https://tailwindcss.com)
* Using both MarkdownIt and MDEditor in different view

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

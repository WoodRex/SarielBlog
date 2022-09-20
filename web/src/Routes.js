// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route, Private } from '@redwoodjs/router'

import AdminLayout from './layouts/AdminLayout/AdminLayout'
import BlogLayout from './layouts/BlogLayout/BlogLayout'

const Routes = () => {
  return (
    <Router>
    <Private unauthenticated='login'>
      <Set wrap={AdminLayout}>
        <Route path="/admin/categories/new" page={AdminCategoryNewCategoryPage} name="adminNewCategory" />
        <Route path="/admin/categories/{id:Int}/edit" page={AdminCategoryEditCategoryPage} name="adminEditCategory" />
        <Route path="/admin/categories/{id:Int}" page={AdminCategoryCategoryPage} name="adminCategory" />
        <Route path="/admin/categories" page={AdminCategoryCategoriesPage} name="adminCategories" />
        <Route path="/admin/posts/new" page={AdminPostNewPostPage} name="adminNewPost" />
        <Route path="/admin/posts/{id:Int}/edit" page={AdminPostEditPostPage} name="adminEditPost" />
        <Route path="/admin/posts/{id:Int}" page={AdminPostPostPage} name="adminPost" />
        <Route path="/admin/posts" page={AdminPostPostsPage} name="adminPosts" />
      </Set>
    </Private>
    <Set wrap={BlogLayout}>
      <Route path="/" page={BlogPostsPage} name="home" prerender/>
      <Route path="/about" page={BlogAboutPage} name="about" prerender/>
      <Route path="/page/{page:Int}" page={BlogPostsPage} name="page" prerender/>
      <Route path="/category/{id:Int}/page/{page:Int}" page={BlogCategoriedPostsPage} name="category" prerender/>
      <Route path="/post/{id:Int}" page={BlogPostPage} name="post" prerender/>
      <Route path="/search/{term:String}" page={BlogSearchPage} name="search" />
    </Set>
      <Route path="/admin/login" page={BlogLoginPage} name="login" />
      <Route path="/signup" page={BlogSignupPage} name="signup" />
      <Route path="/forgot-password" page={BlogForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={BlogResetPasswordPage} name="resetPassword" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import AddPost from "../components/Post/AddPost.vue";
import Posts from "../components/Post/Posts.vue";
import Profile from "../components/Auth/Profile.vue";
import SignIn from "../components/Auth/SignIn.vue";
import SignUp from "../components/Auth/SignUp.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/posts",
    name: "posts",
    component: Posts
  },
  {
    path: "/post/add",
    name: "AddPost",
    component: AddPost
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

<template>
  <v-app>
    <!-- Horizontale Navbar  -->
    <v-toolbar fixed color="primary" dark>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-xs-only">
        <router-link to="/" tag="span" style="cursor: pointer">
          Vue Share
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        flex
        prepend-icon="mdi-magnify"
        placeholder="Search posts"
        color="accent"
        style="cursor: pointer"
        single-line
        hide-details
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          text
          v-for="item in horizontalNavItems"
          :key="item.title"
          :to="item.link"
        >
          <v-icon left class="hidden-sm-only"> {{ item.icon }} </v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-spacer></v-spacer>
    <!--   Mussnochweg -->
    <main>
      <v-container class="mt-4">
        <router-view />
      </v-container>
    </main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  computed: {
    horizontalNavItems() {
      return [
        {
          icon: "mdi-chat",
          title: "Posts",
          link: "/posts"
        },
        { icon: "mdi-login", title: "Sign in", link: "/signin" },
        { icon: "mdi-account-plus", title: "Sign up", link: "/signup" }
      ];
    }
  }
};
</script>

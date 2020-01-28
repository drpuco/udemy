<template>
  <v-app style="background: #E3E3E3">
    <!-- Side Navbar -->

    <v-navigation-drawer app temporary fixed v-model="sideNav">
      <v-app-bar color="accent" dark flat>
        <v-app-bar-nav-icon @click="toggleSideNav"></v-app-bar-nav-icon>

        <router-link to="/" tag="span" style="cursor: pointer">
          <h1 class="title pl-3">Vue Share</h1>
        </router-link>
      </v-app-bar>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="item in sideNavItems" :key="item.title" :to="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Horizontale Navbar  -->

    <v-app-bar max-height="48px" color="primary" dark short>
      <v-app-bar-nav-icon @click="toggleSideNav"></v-app-bar-nav-icon>

      <v-app-bar-title class="hidden-xs-only">
        <router-link to="/" tag="span" style="cursor: pointer">Vue Share</router-link>
      </v-app-bar-title>
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
        <v-btn text v-for="item in horizontalNavItems" :key="item.title" :to="item.link">
          <v-icon left class="hidden-sm-only">{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <!--   Mussnochweg -->
    <main>
      <v-container class="mt-4">
        <transition name="fade">
          <router-view />
        </transition>
      </v-container>
    </main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      sideNav: false
    };
  },
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
    },
    sideNavItems() {
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
  },
  methods: {
    toggleSideNav() {
      this.sideNav = !this.sideNav;
    }
  }
};
</script>

<style >
.fade-enter-active,
.fade-leave-active {
  transition-property: all;
  transition-duration: 0.25s;
}
.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateY(-50px);
}
</style>

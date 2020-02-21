import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

import { gql } from 'apollo-boost'
import { defaultClient as apolloClient } from '../main'

import { GET_POSTS, SIGNINUSER, GET_CURRENT_USER } from '../queries'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    loading: false
  },
  mutations: {
    setPosts: (state, payload) => {
      state.posts = payload
    },
    setLoading: (state, payload) => {
      state.loading = payload
    }
  },
  actions: {
    getCurrentUser: ({ commit }) => {
      commit('setLoading', true)
      apolloClient
        .query({
          query: GET_CURRENT_USER
        })
        .then(({ data }) => {
          commit('setLoading', false)
          console.log(data)
        })
        .catch(err => {
          commit('setLoading', false)
          console.error(err)
        })
    },
    getPosts: ({ commit }) => {
      commit('setLoading', true)
      //use ApolloClient to fire getPosts query
      apolloClient
        .query({
          query: GET_POSTS
        })
        .then(({ data }) => {
          // get data and update state
          // commit gibt die Daten an eine Mutation weiter
          commit('setPosts', data.getPosts)
          commit('setLoading', false)
        })
        .catch(err => {
          console.log(err)
          commit('setLoading', false)
        })
    },
    signinUser: ({ commit }, payload) => {
      apolloClient
        .mutate({
          mutation: SIGNINUSER,
          variables: payload
        })
        .then(({ data }) => {
          localStorage.setItem('token', data.signinUser.token)
          router.go()
        })
        .catch(err => {
          console.error(err)
        })
    }
  },
  getters: {
    posts: state => state.posts,
    loading: state => state.loading
  }
})

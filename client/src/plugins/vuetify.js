import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

import colors from "vuetify/es5/util/colors";

Vue.use(Vuetify, {
  theme: {
    primary: "colors.cyan.base1",
    secondary: "colors.orange.base",
    accent: "colors.indigo.base",
    error: "colors.red.base",
    warning: "colors.deep-orange.base",
    info: "colors.yellow.base",
    success: "colors.green.base"
  },
  iconfont: "mdi" // 'md' || 'mdi' || 'fa' || 'fa4'
});

export default new Vuetify({});

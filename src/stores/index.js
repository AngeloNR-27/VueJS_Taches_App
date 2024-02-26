import { createStore } from 'vuex';
import tasks from './tasks';
import users from './users';

export default createStore({
  modules: {
    tasks,
    users
  }
});

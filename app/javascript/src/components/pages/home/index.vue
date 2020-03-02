<template>
  <ul>
    <TasksList v-bind:title='"To Do"' v-bind:tasks='pendingTasks'></TasksList>
    <TasksList v-bind:title='"Doing"' v-bind:tasks='currentTasks'></TasksList>
    <TasksList v-bind:title='"Done"' v-bind:tasks='doneTasks'></TasksList>
  </ul>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { FETCH_TASKS } from "../../../store/actions.type"
  import TasksList from '../../tasks-list'


  export default {
    components: {
      TasksList
    },
    computed: {
      ...mapGetters([
        'tasks',
        'pendingTasks',
        'currentTasks',
        'doneTasks',
      ])
    },
    mounted() {
      this.$store.dispatch(FETCH_TASKS)
    }
  }
</script>

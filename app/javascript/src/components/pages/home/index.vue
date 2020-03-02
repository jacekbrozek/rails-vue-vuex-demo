<template>
  <ul>
    <li v-for='task in tasks' v-bind:key='task.id'>
      {{ task.name }}
    </li>
  </ul>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { FETCH_TASKS } from "../../../store/actions.type";

  export default {
    components: {
    },
    computed: {
      ...mapGetters([
        'tasks',
      ])
    },
    mounted() {
      this.$store.dispatch(FETCH_TASKS)
    }
  }
</script>

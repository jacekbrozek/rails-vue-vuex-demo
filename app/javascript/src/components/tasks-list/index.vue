<template>
  <section>
    <h3>{{ title }}</h3>
    <ul>
      <li v-for='task in tasks' v-bind:key='task.id'>
        {{ task.name }}
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    props: ['title', 'tasks']
  }
</script>

<template>
  <h1>
    welcome to admin page
  </h1>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth']
}
</script>

<style scoped>

</style>

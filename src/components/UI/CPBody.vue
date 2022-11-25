<template>
  <CPCustomers :customers="this.customers"/>
</template>
<script>
import CPCustomers from '../customers/CPCustomers.vue';
export default {
  props: ['customers'],
  components: {
    CPCustomers,
  },
}
</script>
<style scoped>
</style>
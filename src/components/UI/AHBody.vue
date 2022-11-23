<template>
  <AHCustomers :customers="this.customers"/>
</template>
<script>
import AHCustomers from '../customers/AHCustomers.vue';
export default {
props: ['customers'],
components: {
  AHCustomers,
},
}
</script>
<style scoped>
</style>
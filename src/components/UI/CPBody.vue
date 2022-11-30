<template>
  <CPCustomers :customers="this.customers" :isFetchingData="this.isFetchingData" />
</template>
<script>
import CPCustomers from '../customers/CPCustomers.vue';
export default {
  props: ['customers', 'isFetchingData'],
  components: {
    CPCustomers,
  },
}
</script>
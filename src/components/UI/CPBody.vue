<template>
  <CPCustomers :customers="this.customers" :isFetchingData="this.isFetchingData" :fetchError ="this.fetchError" />
</template>
<script>
import CPCustomers from '../customers/CPCustomers.vue';
export default {
  props: ['customers', 'isFetchingData', 'fetchError'],
  components: {
    CPCustomers,
  },
}
</script>
<template>
  <CPCustomers :customers="this.customers" :isFetchingData="this.isFetchingData" :fetchError ="this.fetchError" :fetchCode="this.fetchCode" />
</template>
<script>
import CPCustomers from '../customers/CPCustomers.vue';
export default {
  props: ['customers', 'isFetchingData', 'fetchError', "fetchCode"],
  components: {
    CPCustomers,
  },
}
</script>
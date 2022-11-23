<template>
    <LoadingSpinner v-if="this.$store.state.isLoading"/>
    <AHCustomers :customers="this.customers" v-else/>
</template>
<script>
import AHCustomers from '../customers/AHCustomers.vue';
import LoadingSpinner from '../UI/LoadingSpinner.vue';

export default {
  props: ['customers'],
  components: {
    AHCustomers,
    LoadingSpinner,
  },
}
</script>
<style scoped>

</style>
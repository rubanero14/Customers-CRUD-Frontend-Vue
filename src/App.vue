<template>
  <CPHeader />
  <LoadingSpinner v-if="this.$store.state.isLoading"/>
  <CPBody :customers="this.customers" v-else/>
  <CPFooter />
</template>

<script>
import axios from 'axios';
import CPHeader from './components/UI/CPHeader.vue';
import CPBody from './components/UI/CPBody.vue';
import CPFooter from './components/UI/CPFooter.vue';
import LoadingSpinner from './components/UI/LoadingSpinner.vue';

export default {
  name: 'Customers-Data-Management-Application',
  components: {
    CPHeader,
    CPBody,
    CPFooter,
    LoadingSpinner,
  },
  data() {
      return {
          getAllCustomersUrl: 'http://localhost:3000/customers',
          customers: [],
          isLoading: false,
      };
  },
  mounted() {
     this.getAllCustomers();
  },
  updated() {
    setInterval(() => {
      this.getAllCustomers()
    }, 100000);
  },
  methods: {
    async getAllCustomers() {
        this.isLoading = true;
        try {
            const response = await axios.get(this.getAllCustomersUrl);
            this.customers = response.data;
        } catch (error) {
            console.error(error);
        }
        this.isLoading = true;
    },
  }
}
</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css');
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css');
</style>
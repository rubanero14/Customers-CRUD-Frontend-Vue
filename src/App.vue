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
  name: 'CDM-Tool',
  components: {
    CPHeader,
    CPBody,
    CPFooter,
    LoadingSpinner,
  },
  data() {
      return {
          getAllCustomersUrl: 'https://customers-crud-backend.onrender.com/customers',
          customers: [],
          isLoading: false,
      };
  },
  mounted() {
    this.setAppTitle();

    // Get all list if customers data
    this.getAllCustomers();

    // Pooling logic to update all customers data from server every 10 seconds
    setInterval(() => {
      this.getAllCustomers();
    }, 10000);
  },
  methods: {
    async getAllCustomers() {
        this.isLoading = true;
        try {
            const response = await axios.get(this.getAllCustomersUrl);
            this.customers = response.data;
            console.log(response.data)
        } catch (error) {
            console.error(error);
        }
        this.isLoading = true;
    },
    setAppTitle() {
      // Set App Title
      document.title = 'Customers Data Management App';
    },
  }
}
</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css');

svg.icon {
  width: 16px;
  fill: currentColor;
  margin-bottom: 0.25rem;
}
</style>
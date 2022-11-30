<template>
  <CPHeader />
  <CPBody :customers="this.customers" :isFetchingData="this.isFetchingData" />
  <CPFooter />
</template>

<script>
import axios from "axios";
import CPHeader from "./components/UI/CPHeader.vue";
import CPBody from "./components/UI/CPBody.vue";
import CPFooter from "./components/UI/CPFooter.vue";

export default {
  name: "CDM-Tool",
  components: {
    CPHeader,
    CPBody,
    CPFooter,
  },
  data() {
    return {
      getAllCustomersEndpoint:
        "https://customers-crud-backend.onrender.com/customers",
      customers: [],
      isFetchingData: false,
    };
  },
  mounted() {
    this.setAppTitle();

    // Get all list of customers data
    this.getAllCustomers();

    // Polling logic to update all customers data from server every 5 seconds
    setInterval(() => {
      this.getAllCustomers();
    }, 5000);
  },
  methods: {
    async getAllCustomers() {
      this.isFetchingData = true;
      try {
        const response = await axios.get(this.getAllCustomersEndpoint);
        this.customers = response.data;
        this.isFetchingData = false;
      } catch (error) {
        console.error(error);
        this.isFetchingData = false;
      }
    },
    setAppTitle() {
      // Set App Title
      document.title = "Home - CIM";
    },
  },
};
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");

h5 {
  margin-right: 5px;
}
</style>

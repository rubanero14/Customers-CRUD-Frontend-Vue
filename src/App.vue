<template>
  <CPHeader />
  <CPBody
    :customers="this.customers"
    :isFetchingData="this.isFetchingData"
    :fetchError="this.fetchError"
    :fetchCode="this.fetchCode"
  />
  <CPSnackbar
    :snackBarView="this.fetchCode"
    v-if="this.snackBarActivation > 0"
    @click="this.snackBarActivation = 0"
  />
  <CPFooter />
</template>

<script>
import axios from "axios";
import CPHeader from "./components/UI/CPHeader.vue";
import CPBody from "./components/UI/CPBody.vue";
import CPFooter from "./components/UI/CPFooter.vue";
import CPSnackbar from "./components/UI/CPSnackbar.vue";

export default {
  name: "CDM-Tool",
  components: {
    CPHeader,
    CPBody,
    CPFooter,
    CPSnackbar,
  },
  data() {
    return {
      getAllCustomersEndpoint:
        "https://customers-crud-backend.onrender.com/customers",
      customers: undefined,
      isFetchingData: false,
      fetchCount: 0,
      fetchError: false,
      fetchCode: undefined,
      snackBarActivation: 0,
      snackBarHide: true,
    };
  },
  mounted() {
    this.setAppTitle();

    this.getAllCustomers(0);

    // Polling logic to update all customers data from server every 5 seconds
    setInterval(() => {
      this.getAllCustomers(1);
    }, 10000);
  },
  methods: {
    async getAllCustomers(val) {
      // To listen user device is connected to internet
      if (navigator.onLine) {
        this.isFetchingData = true;
        this.fetchError = false;
        try {
          const response = await axios.get(this.getAllCustomersEndpoint);
          this.customers = response.data;
          this.fetchCode = 200;
          this.fetchCount = 0;
          this.isFetchingData = false;
          this.fetchError = false;
          this.autoCloseSnackBar();
        } catch {
          this.fetchCode = 503;
          this.snackBarActivation = val + 1;
          this.customers = undefined;
          this.isFetchingData = false;
          this.fetchError = true;
          this.fetchCount++;
        }
      } else {
        this.snackBarActivation = val + 1;
        this.fetchCode = 404;
        this.fetchError = true;
      }
    },
    setAppTitle() {
      // Set App Title
      document.title = "Home - CIM";
    },
    autoCloseSnackBar() {
      setTimeout(() => {
        this.snackBarActivation = 0;
      }, 5000);
    }
  },
};
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");

h5 {
  margin-right: 5px;
}
</style>

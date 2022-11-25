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
          getAllCustomersUrl: 'https://customers-crud-backend.onrender.com/customers',
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

/*Vue Animation*/ 
.pop-enter-from, .pop-leave-to {
  opacity: 0;
  transform: scale(0);
}
.pop-enter-active {
  transition: all 0.2s ease-out;
}
.pop-leave-active {
  transition: all 0.2s ease-in;
}
.pop-enter-to, .pop-leave-from {
  opacity: 1;
  transform: scale(1);
}
.button-enter-from {
  opacity: 0;
  transform: rotateX(-180deg);
}
.button-leave-to {
  opacity: 0;
  transform: rotateX(180deg);
}
.button-enter-active {
  transition: all 0.2s ease-out;
}
.button-leave-active {
  transition: all 0.2s ease-in;
}
.button-enter-to, .button-leave-from {
  opacity: 1;
  transform: rotateX(0);
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}
.slide-fade-enter-to, .slide-fade-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.alert-enter-from {
  opacity: 1;
  transform: translateY(-10px);
}
</style>
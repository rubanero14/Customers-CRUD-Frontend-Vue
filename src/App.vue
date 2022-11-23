<template>
  <AHHeader></AHHeader>
  <AHBody :customers="this.customers"></AHBody>
  <AHFooter></AHFooter>
</template>

<script>
import axios from 'axios';
import AHHeader from './components/UI/AHHeader.vue';
import AHBody from './components/UI/AHBody.vue';
import AHFooter from './components/UI/AHFooter.vue';
export default {
  name: 'Customers-Frontend',
  components: {
    AHHeader,
    AHBody,
    AHFooter,
  },
  data() {
      return {
          getAllCustomersUrl: 'http://localhost:3000/customers',
          customers: [],
      };
  },
  mounted() {
     this.getAllCustomers();
  },
  methods: {
    async getAllCustomers() {
        await this.$store.dispatch('isLoading', true);
        try {
            const response = await axios.get(this.getAllCustomersUrl);
            this.customers = response.data;
        } catch (error) {
            console.error(error);
        }
        await this.$store.dispatch('isLoading', false);
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

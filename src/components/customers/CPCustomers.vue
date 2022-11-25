<template>
    <div class="container">
        <div class="row">
            <LoadingSpinner v-if="this.isLoading"/>
            <CreateCustomer class="mb-3" @toggle-loading="this.isLoading = newValue" :isLoading="this.isLoading" v-if="!this.isLoading"/>
            <CPCustomerList :customers="this.customers" @toggle-loading="this.isLoading = newValue" :isLoading="this.isLoading" v-if="!this.isLoading"/>
        </div>
    </div>
</template>
<script>
import CPCustomerList from './CPCustomerList.vue';
import CreateCustomer from './CreateCustomer.vue';
import LoadingSpinner from '../UI/LoadingSpinner.vue';

export default {
    props: ['customers'],
    components: {
        CPCustomerList,
        CreateCustomer,
        LoadingSpinner,
    },
    data() {
        return {
            isViewAllCustomers: true,
            isLoading: false,
        };
    },
}
</script>
<style scoped>
</style>
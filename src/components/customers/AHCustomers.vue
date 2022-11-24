<template>
    <div class="container">
        <div class="row">
            <LoadingSpinner v-if="this.isLoading"/>
            <CreateCustomer class="mb-3" @toggle-loading="this.isLoading = newValue" :isLoading="this.isLoading" v-if="!this.isLoading"/>
            <AHCustomersList :customers="this.customers" @toggle-loading="this.isLoading = newValue" :isLoading="this.isLoading" v-if="!this.isLoading"/>
        </div>
    </div>
</template>
<script>
import AHCustomersList from './AHCustomerList.vue';
import CreateCustomer from './CreateCustomer.vue';
import LoadingSpinner from '../UI/LoadingSpinner.vue';

export default {
    props: ['customers'],
    components: {
        AHCustomersList,
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
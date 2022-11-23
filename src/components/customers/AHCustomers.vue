<template>
    <div class="container">
        <div class="row">
            <CreateCustomer class="mb-3" />
            <AHCustomersList :customers="this.customers"/>
        </div>
    </div>
</template>
<script>
import AHCustomersList from './AHCustomerList.vue';
import CreateCustomer from './CreateCustomer.vue';
export default {
    props: ['customers'],
    components: {
        AHCustomersList,
        CreateCustomer,
    },
    data() {
        return {
            isViewAllCustomers: true,
        };
    },
}
</script>
<style scoped>
</style>
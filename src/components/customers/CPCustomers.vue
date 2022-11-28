<template>
    <div class="container">
        <div class="row">
            <CreateCustomer class="mb-3" />
            <CPCustomerList :customers="this.customers" :isFetchingData="this.isFetchingData" />
        </div>
    </div>
</template>
<script>
import CPCustomerList from './CPCustomerList.vue';
import CreateCustomer from './CreateCustomer.vue';

export default {
    props: ['customers', "isFetchingData"],
    components: {
        CPCustomerList,
        CreateCustomer,
    },
}
</script>
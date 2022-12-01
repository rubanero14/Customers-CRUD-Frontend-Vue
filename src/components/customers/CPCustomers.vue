<template>
    <div class="container">
        <div class="row">
            <CreateCustomer class="mb-3" />
            <CPCustomerList :customers="this.customers" :isFetchingData="this.isFetchingData" :fetchError ="this.fetchError" :fetchCode="this.fetchCode" />
        </div>
    </div>
</template>
<script>
import CPCustomerList from './CPCustomerList.vue';
import CreateCustomer from './CreateCustomer.vue';

export default {
    props: ['customers', "isFetchingData", "fetchError", "fetchCode"],
    components: {
        CPCustomerList,
        CreateCustomer,
    },
}
</script>
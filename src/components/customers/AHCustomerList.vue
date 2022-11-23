<template>
    <div class="col-12" v-if="customers.length > 0">
        <center>
            <transition-group v-if="!isViewDetails">
                <CardComponent v-for="customer of customers" :key="customer.id" :id="customer.id">
                    <div>
                        <p class="d-inline-block mb-2">Customer ID: {{customer.id}}</p>
                        <br/>
                        <p class="d-inline-block mb-2">Customer Name: {{customer.firstName + ' ' + customer.lastName}}</p>
                        <br/>
                        <p class="d-inline-block mb-2">Customer Age: {{customer.age}}</p>
                        <br/>
                        <button class="d-block btn btn-primary" @click="viewDetails(customer)">View Details</button>
                    </div>
                </CardComponent>
            </transition-group>
            <transition v-else>
                <CardComponent>
                    <div v-if="!isEditDetail">
                        <div class="row" :id="customer.id">
                            <div class="col-12">
                                <p>Customer ID: {{customer.id}}</p>
                            </div>
                            <div class="col-12">
                                <p>Customer Name: {{customer.firstName + ' ' + customer.lastName}}</p>
                            </div>
                            <div class="col-12">
                                <p>Customer Age: {{customer.age}}</p>
                            </div>
                            <div class="col-12">
                                <p>Customer Mobile No: {{customer.moBileNo}}</p>
                            </div>
                            <div class="col-12">
                                <p>Customer Email: {{customer.email}}</p>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary mb-2" @click="deleteCustomer(customer.id)">Delete</button>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-success mb-2" @click="editDetails(customer)">Edit</button>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-danger mb-2" @click="this.isViewDetails = false">Back</button>
                            </div>
                        </div>
                    </div>
                    <UpdateCustomer :customer="customer" @toggle-edit="newValue => isEditDetail = newValue" :isEditDetail="isEditDetail" v-else/>
                </CardComponent>
            </transition>
        </center>
    </div>
    <div class="col-12" v-else>
        <p class="text-center text-secondary no-clients-alert mb-0">No clients registered for now. Register a new one?</p>
    </div>
</template>
<script>
import axios from 'axios';
import CardComponent from '../UI/CardComponent.vue';
import UpdateCustomer from './UpdateCustomer.vue';
export default {
    props: ['customers'],
    data() {
        return {
            isViewDetails: false,
            isEditDetail: false,
            deleteEndpoint: 'http://localhost:3000/deleteUser',
        };
    },
    components: {
        CardComponent,
        UpdateCustomer
    }, 
    computed: {
        isLoading(){
            return this.$store.state.isLoading;
        },
    },
    methods: {
        viewDetails(cm) {
            this.customer = cm;
            this.isViewDetails = true;
        },
        editDetails(cm) {
            this.customer = cm;
            this.isEditDetail = true;
        },
        async deleteCustomer(id) {
            await this.$store.dispatch('isLoading', true);
            console.log(this.deleteEndpoint, {
                "id": id,
            });
            await axios.post(this.deleteEndpoint, id)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
            this.isViewDetails = false;
            await this.$store.dispatch('isLoading', false);
        }
    },
}
</script>
<style scoped>
.no-clients-alert{
    font-weight: bold;
    font-size: 20px;
}
.btn {
    width: 300px;
}

p {
    text-align: center;
}

@media (max-width: 768px) {
    .btn {
        width: 100%;
    }

    p {
        text-align: start;
    }
}
</style>
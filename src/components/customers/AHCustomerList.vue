<template>
    <div class="col-12" v-if="customers.length > 0">
        <center>
            <div v-if="!isViewDetails" >
                <transition
                    v-for="(customer, index) in customers"
                    :key="index"
                    appear
                    name="fade"
                    mode="out-in"
                >   
                    <CardComponent :key="customer.id" :id="customer.id">
                        <center :style="{ '--i': index }">
                            <div>
                                <p>Customer ID: <strong>{{customer.id}}</strong></p>
                                <p>Customer Name: <strong>{{customer.firstName + ' ' + customer.lastName}}</strong></p>
                                <p>Customer Age: <strong>{{customer.age}}</strong></p>
                                <button class="d-block btn btn-outline-success" @click="viewDetails(customer)"><i class="bi bi-info-circle"></i> View Details</button>
                            </div>
                        </center>
                    </CardComponent>
                </transition>
            </div>
            <transition v-else>
                <CardComponent>
                    <center>
                        <div :id="customer.id" v-if="!isEditDetail">
                            <p>Customer ID: <strong>{{customer.id}}</strong></p>
                            <p>Customer Name: <strong>{{customer.firstName + ' ' + customer.lastName}}</strong></p>
                            <p>Customer Mobile No: <strong>{{customer.mobileNo}}</strong></p>
                            <p>Customer Age: <strong>{{customer.age}}</strong></p>
                            <p>Customer Email: <strong>{{customer.email}}</strong></p>
                            <button class="btn btn-outline-primary mb-2" @click="deleteCustomer(customer.id)"><i class="bi bi-trash"></i> Delete</button>
                            <br/>
                            <button class="btn btn-outline-success mb-2" @click="editDetails(customer)"><i class="bi bi-pencil-square"></i> Edit</button>
                            <br/>
                            <button class="btn btn-outline-danger mb-2" @click="this.isViewDetails = false"><i class="bi bi-arrow-left"></i> Back</button>
                        </div>
                        <UpdateCustomer :customer="customer" @toggle-edit="newValue => isEditDetail = newValue" :isEditDetail="isEditDetail" v-else/>
                    </center>
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
/* Declared variable --i is used to dynamically calculate transition time */
.fade-enter-active {
    transition: all 0.5s ease-in-out;
    transition-delay: calc(var(--i) * 0.05s);
  }
  .fade-leave-active {
    transition: all 0.5s ease-in-out;
    transition-delay: calc(var(--i) * 0.05s);
    
  }
  .fade-enter-from {
    opacity: 0;
    transform: translateX(-15px);
  }
  .fade-leave-to {
    opacity: 0;
    transform: translateX(15px);
  }
  .fade-enter-to,
  .fade-leave-from {
    opacity: 1;
  }
</style>
<template>
    <div class="col-12" v-if="customers.length > 0">
        <center>
            <transition v-if="!isViewDetails" 
                :key="this.index"
                appear
                name="fade"
                mode="out-in"
            >
                <center :style="{ '--i': this.index }">
                    <CardComponent v-for="customer of customers" :key="customer.id" :id="customer.id">
                        <div>
                            <p class="d-inline-block mb-2">Customer ID: <strong>{{customer.id}}</strong></p>
                            <br/>
                            <p class="d-inline-block mb-2">Customer Name: <strong>{{customer.firstName + ' ' + customer.lastName}}</strong></p>
                            <br/>
                            <p class="d-inline-block mb-2">Customer Age: <strong>{{customer.age}}</strong></p>
                            <br/>
                            <button class="d-block btn btn-outline-success" @click="viewDetails(customer)"><i class="bi bi-info-circle"></i> View Details</button>
                        </div>
                    </CardComponent>
                </center>
            </transition>
            <transition v-else>
                <CardComponent>
                    <div v-if="!isEditDetail">
                        <div class="row" :id="customer.id">
                            <div class="col-12">
                                <p>Customer ID: <strong>{{customer.id}}</strong></p>
                            </div>
                            <div class="col-12">
                                <p>Customer Name: <strong>{{customer.firstName + ' ' + customer.lastName}}</strong></p>
                            </div>
                            <div class="col-12">
                                <p>Customer Age: <strong>{{customer.age}}</strong></p>
                            </div>
                            <div class="col-12">
                                <p>Customer Mobile No: <strong>{{customer.moBileNo}}</strong></p>
                            </div>
                            <div class="col-12">
                                <p>Customer Email: <strong>{{customer.email}}</strong></p>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary mb-2" @click="deleteCustomer(customer.id)"><i class="bi bi-trash"></i> Delete</button>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-success mb-2" @click="editDetails(customer)"><i class="bi bi-pencil-square"></i> Edit</button>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-danger mb-2" @click="this.isViewDetails = false"><i class="bi bi-arrow-left"></i> Back</button>
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
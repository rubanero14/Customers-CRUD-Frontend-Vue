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
                    <CardComponent class="mb-3 me-0 me-lg-3" :key="customer.id" :id="customer.id">
                        <center :style="{ '--i': index }">
                            <div>
                                <p>Customer ID: <strong>{{customer.id}}</strong></p>
                                <p>Customer Name: <strong>{{customer.firstName + ' ' + customer.lastName}}</strong></p>
                                <button class="d-block btn btn-outline-success" @click="viewDetails(customer)">
                                    <i class="bi bi-info-circle"></i> View Details
                                </button>
                            </div>
                        </center>
                    </CardComponent>
                </transition>
            </div>
            <transition 
                appear
                name="fade"
                mode="out-in"
                v-else
            >
                <CardComponent>
                    <center>
                        <div :id="customer.id" v-if="!isEditDetail">
                            <h5><strong>{{this.isDelete ? 'Delete' : ''}} {{customer.firstName + ' ' + customer.lastName}}'s Details</strong></h5>
                            <p>Customer ID: <strong>{{customer.id}}</strong></p>
                            <p>Customer Name: <strong>{{customer.firstName + ' ' + customer.lastName}}</strong></p>
                            <p>Customer Mobile No: <strong>{{customer.mobileNo}}</strong></p>
                            <p>Customer Age: <strong>{{customer.age}}</strong></p>
                            <p>Customer Email: <strong>{{customer.email}}</strong></p>
                            <div v-show="!this.isDelete">
                                <button class="btn btn-outline-danger mb-2" @click="this.isDelete = true"><i class="bi bi-trash"></i> Delete</button>
                                <br/>
                                <button class="btn btn-outline-primary mb-2" @click="editDetails(customer)"><i class="bi bi-pencil-square"></i> Edit</button>
                                <br/>
                                <button class="btn btn-outline-success mb-2" @click="this.isViewDetails = false"><i class="bi bi-arrow-left"></i> Back</button>
                            </div>
                            <p v-show="this.isDelete" class="text-danger">
                                <strong>
                                    Are you sure to delete {{customer.firstName + ' ' + customer.lastName}}'s details?
                                </strong>
                            </p>
                            <div v-show="this.isDelete">
                                <button class="btn btn-outline-danger mb-2" @click="deleteCustomer(customer.id)"><i class="bi bi-trash"></i> Delete</button>
                                <br/>
                                <button class="btn btn-outline-success mb-2" @click="this.isDelete = false"><i class="bi bi-arrow-left"></i> Back</button>
                                <p class="text-success mb-0" v-if="this.isDeleteSuccess">Deleted Successfully!</p>
                                <p class="text-danger mb-0" v-if="!this.isDeleteSuccess && this.isDeleteSuccess !== undefined">Delete was unsuccessful!</p>
                            </div>
                        </div>
                        <UpdateCustomer :isLoading="this.isLoading" :customer="customer" @toggle-edit="isEditDetail = newValue" :isEditDetail="isEditDetail" v-else/>
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
    props: ['customers', 'toggle-loading', 'isLoading'],
    emits: ['toggle-loading'],
    data() {
        return {
            isViewDetails: false,
            isEditDetail: false,
            isDelete: false,
            isDeleteSuccess: undefined,
            deleteEndpoint: 'http://localhost:3000/deleteUser',
        };
    },
    components: {
        CardComponent,
        UpdateCustomer
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
            this.$emit('toggle-loading', true);

            await axios.post(this.deleteEndpoint, id)
            .then(() => {
                this.isDeleteSuccess = true;
            })
            .catch(() => {
                this.isDeleteSuccess = false;
            });

            setTimeout(() => this.isViewDetails = false, 5000)

            this.$emit('toggle-loading', false);
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
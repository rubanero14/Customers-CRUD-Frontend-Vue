<template>
    <div class="col-12" v-if="customers.length > 0">
        <center>
            <div v-if="!isViewDetails" >
                <h1 class="text-secondary mb-3"><strong>List of Customers</strong></h1>
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
                                <p class="text-secondary">Customer ID: <strong>{{customer.id}}</strong></p>
                                <p class="text-secondary">Customer Name: <strong>{{customer.firstName + ' ' + customer.lastName}}</strong></p>
                                <button class="d-block btn btn-outline-secondary" @click="viewDetails(customer)">
                                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"/></svg>
                                    View Details
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
                            <h5 class="text-secondary"><strong>{{this.isDelete ? 'Delete' : ''}} {{customer.firstName + ' ' + customer.lastName}}'s Details</strong></h5>
                            <p class="text-secondary">Customer ID: <strong>{{customer.id}}</strong></p>
                            <p class="text-secondary">Customer Name: <strong>{{customer.firstName + ' ' + customer.lastName}}</strong></p>
                            <p class="text-secondary">Customer Mobile No: <strong>{{customer.mobileNo}}</strong></p>
                            <p class="text-secondary">Customer Age: <strong>{{customer.age}}</strong></p>
                            <p class="text-secondary">Customer Email: <strong>{{customer.email}}</strong></p>
                            <div v-show="!this.isDelete">
                                <button class="btn btn-outline-danger mb-2" @click="this.isDelete = true">
                                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
                                    Delete
                                </button>
                                <br/>
                                <button class="btn btn-outline-primary mb-2" @click="editDetails(customer)">
                                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M373.1 24.97C401.2-3.147 446.8-3.147 474.9 24.97L487 37.09C515.1 65.21 515.1 110.8 487 138.9L289.8 336.2C281.1 344.8 270.4 351.1 258.6 354.5L158.6 383.1C150.2 385.5 141.2 383.1 135 376.1C128.9 370.8 126.5 361.8 128.9 353.4L157.5 253.4C160.9 241.6 167.2 230.9 175.8 222.2L373.1 24.97zM440.1 58.91C431.6 49.54 416.4 49.54 407 58.91L377.9 88L424 134.1L453.1 104.1C462.5 95.6 462.5 80.4 453.1 71.03L440.1 58.91zM203.7 266.6L186.9 325.1L245.4 308.3C249.4 307.2 252.9 305.1 255.8 302.2L390.1 168L344 121.9L209.8 256.2C206.9 259.1 204.8 262.6 203.7 266.6zM200 64C213.3 64 224 74.75 224 88C224 101.3 213.3 112 200 112H88C65.91 112 48 129.9 48 152V424C48 446.1 65.91 464 88 464H360C382.1 464 400 446.1 400 424V312C400 298.7 410.7 288 424 288C437.3 288 448 298.7 448 312V424C448 472.6 408.6 512 360 512H88C39.4 512 0 472.6 0 424V152C0 103.4 39.4 64 88 64H200z"/></svg>
                                    Edit
                                </button>
                                <br/>
                                <button class="btn btn-outline-success mb-2" @click="this.isViewDetails = false">
                                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg> 
                                    Back
                                </button>
                            </div>
                            <p v-show="this.isDelete" class="text-danger">
                                <strong>
                                    Are you sure to delete {{customer.firstName + ' ' + customer.lastName}}'s details?
                                </strong>
                            </p>
                            <div v-show="this.isDelete">
                                <button class="btn btn-outline-danger mb-2" @click="deleteCustomer(customer.id)">
                                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
                                    Yes
                                </button>
                                <br/>
                                <button class="btn btn-outline-success mb-2" @click="this.isDelete = false">
                                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                                    No
                                </button>
                                <p class="text-success text-center mb-0" v-if="this.isDeleteSuccess">Deleted Successfully!</p>
                                <p class="text-danger text-center mb-0" v-if="!this.isDeleteSuccess && this.isDeleteSuccess !== undefined">Delete was unsuccessful!</p>
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
<template>
    <center>
        <div class="col-12" v-if="!showRegistrationForm">
            <a class="toggle-btn-registration btn btn-outline-secondary mb-3 me-2" target="_blank" href="https://github.com/rubanero14/Customers-CRUD-Backend-Node">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"/></svg>
                Source Code Backend
            </a>
            <a class="toggle-btn-registration btn btn-outline-secondary mb-3 me-2" target="_blank" href="https://github.com/rubanero14/Customers-CRUD-Frontend-Vue">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"/></svg>
                Source Code Frontend
            </a>
            <button class="toggle-btn-registration btn btn-outline-primary mb-3" @click="toggleRegistrationForm">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                Add New Customer
            </button>
        </div>
        <div class="col-12 col-md-6 col-xl-4" v-else>
            <transition
                appear
                name="fade"
                mode="out-in"
            >
                <CardComponent>
                    <h5 class="text-secondary"><strong>New Customer Registration</strong></h5>
                    <form method="POST" @submit.prevent="registerNewCustomer">
                        <div class="row">
                            <div class="col-12">
                                <label class="d-flex justify-content-start text-secondary" for="firstName">Customer First Name</label>
                                <input type="text" class="form-control mb-2" placeholder="Enter customer First Name.." name="firstName" id="firstName" v-model.trim="firstName"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <label class="d-flex justify-content-start text-secondary" for="lastName">Customer Last Name</label>
                                <input type="text" class="form-control mb-2" placeholder="Enter customer Last Name.." name="lastName" id="lastName" v-model.trim="lastName"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <label class="d-flex justify-content-start text-secondary" for="age">Customer Age</label>
                                <input type="number" class="form-control mb-2" placeholder="Enter customer Age.." name="age" id="age" v-model.trim="age"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <label class="d-flex justify-content-start text-secondary" for="mobileNo">Mobile Number</label>
                                <input type="number" class="form-control mb-2" placeholder="Enter mobile no.." name="mobileNo" id="mobileNo" v-model.trim="mobileNo"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <label class="d-flex justify-content-start text-secondary" for="email">Email Address</label>
                                <input type="email" class="form-control mb-2" placeholder="Enter email address.." name="email" id="email" v-model.trim="email"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <button class="btn btn-outline-success w-100 mb-2" type="submit">
                                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                                    Create New Customer
                                </button>
                            </div>
                            <div class="col-12">
                                <button :class="{'mb-2':formValidationAlert, '': !formValidationAlert}" class="btn btn-outline-danger mb-2 w-100" type="submit" @click="toggleRegistrationForm">
                                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                                    Back
                                </button>
                            </div>
                        </div>
                        <div class="row" v-if="formValidationAlert">
                            <div class="col-12">
                                <p class="mb-0 text-danger">Please fill up the required fields!</p>
                            </div>
                        </div>
                    </form>
                    <p class="text-success text-center mb-0" v-if="this.isRegistrationSuccess">Registration was successful!</p>
                    <p class="text-danger text-center mb-0" v-if="!this.isRegistrationSuccess && this.isRegistrationSuccess !== undefined">Registration was unsuccessful!</p>
                </CardComponent>
            </transition>
            <hr/>
        </div>
    </center>
</template>
<script>
import axios from 'axios';
import CardComponent from '../UI/CardComponent.vue';
export default {
    components: {
        CardComponent,
    },
    props: ['toggle-loading', 'isLoading'],
    emits: ['toggle-loading'],
    data(){
        return {
            registrationEndPoint: 'http://localhost:3000/customers',
            firstName: '',
            lastName: '',
            age: '',
            mobileNo: '',
            email: '',
            showRegistrationForm: false,
            formValidationAlert: false,
            isRegistrationSuccess: undefined,
        };
    },
    methods: {
        async registerNewCustomer() {
            this.$emit('toggle-loading', true);
            if (this.firstName === '' || 
                this.lastName === '' || 
                this.age === '' || 
                this.mobileNo === '' || 
                this.email === ''
            ) {
                return this.formValidationAlert = true;
            } else {
                this.formValidationAlert = false;
            }
            await axios.post(this.registrationEndPoint, {
                "id": `cid${Date.now()}`,
                "firstName": this.firstName,
                "lastName": this.lastName,
                "age": this.age,
                "mobileNo": this.mobileNo,
                "email": this.email,
            })
            .then(() => {
                this.isRegistrationSuccess = true;
            })
            .catch(() => {
                this.isRegistrationSuccess = false;
            });

            // Garbage Collection for alerts
            setTimeout(() => {
                this.isRegistrationSuccess = undefined;
                this.toggleRegistrationForm();
            }, 3000);

            // Reset input
            this.firstName = null;
            this.lastName = null;
            this.age = null;
            this.mobileNo = null;
            this.email = null;
            this.$emit('toggle-loading', false);
        },
        toggleRegistrationForm() {
            return this.showRegistrationForm = !this.showRegistrationForm;
        },
    },
}
</script>
<style scoped>
label::after {
    content: '*';
    margin-left: 3px;
    color: red;
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
  
.toggle-btn-registration {
    width: auto;
}
@media (max-width: 768px) {
    .toggle-btn-registration {
        width: 100%;
    }
}
</style>
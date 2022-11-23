<template>
    <center>
        <div class="d-flex justify-content-center align-items-center justify-content-md-end" v-if="!showRegistrationForm">
            <button class="btn btn-primary mb-3" @click="toggleRegistrationForm">Add New Customer</button>
        </div>
        <div class="col-12 col-md-6 col-xl-4" v-else>
            <CardComponent>
                <form method="POST" @submit.prevent="registerNewCustomer">
                    <div class="row">
                        <div class="col-12">
                            <label class="d-flex justify-content-start" for="firstName">Customer First Name</label>
                            <input type="text" class="form-control mb-2" placeholder="Enter customer First Name.." name="firstName" id="firstName" v-model.trim="firstName"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <label class="d-flex justify-content-start" for="lastName">Customer Last Name</label>
                            <input type="text" class="form-control mb-2" placeholder="Enter customer Last Name.." name="lastName" id="lastName" v-model.trim="lastName"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <label class="d-flex justify-content-start" for="age">Customer Age</label>
                            <input type="number" class="form-control mb-2" placeholder="Enter customer Age.." name="age" id="age" v-model.trim="age"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <label class="d-flex justify-content-start" for="mobileNo">Mobile Number</label>
                            <input type="number" class="form-control mb-2" placeholder="Enter mobile no.." name="mobileNo" id="mobileNo" v-model.trim="mobileNo"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <label class="d-flex justify-content-start" for="email">Email Address</label>
                            <input type="email" class="form-control mb-2" placeholder="Enter email address.." name="email" id="email" v-model.trim="email"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <button class="btn btn-primary w-100 mb-2" type="submit">Create New Customer</button>
                        </div>
                        <div class="col-12">
                            <button :class="{'mb-2':formValidationAlert, '': !formValidationAlert}" class="btn btn-danger w-100" type="submit" @click="toggleRegistrationForm">Cancel</button>
                        </div>
                    </div>
                    <div class="row" v-if="formValidationAlert">
                        <div class="col-12">
                            <p class="mb-0 text-danger">Please fill up the required fields!</p>
                        </div>
                    </div>
                </form>
            </CardComponent>
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
        };
    },
    computed: {
        isLoading(){
            return this.$store.state.isLoading;
        },
    },
    methods: {
        async registerNewCustomer() {
            await this.$store.dispatch('isLoading', true);
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
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

            // Reset input
            this.firstName = null;
            this.lastName = null;
            this.age = null;
            this.mobileNo = null;
            this.email = null;
            await this.$store.dispatch('isLoading', false);
        },
        toggleRegistrationForm() {
            return this.showRegistrationForm = !this.showRegistrationForm;
        }
    },
}
</script>
<style scoped>
label::after {
    content: '*';
    margin-left: 3px;
    color: red;
}
</style>
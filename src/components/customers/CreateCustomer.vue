<template>
    <center>
        <div class="col-12" v-if="!showRegistrationForm">
            <a class="toggle-btn-registration btn btn-outline-secondary mb-3 me-2" target="_blank" href="https://github.com/rubanero14/Customers-CRUD-Backend-Node"><i class="bi bi-code-slash"></i> Source Code Backend</a>
            <a class="toggle-btn-registration btn btn-outline-secondary mb-3 me-2" target="_blank" href="https://github.com/rubanero14/Customers-CRUD-Frontend-Vue"><i class="bi bi-code-slash"></i> Source Code Frontend</a>
            <button class="toggle-btn-registration btn btn-outline-primary mb-3" @click="toggleRegistrationForm"><i class="bi bi-plus-lg"></i> Add New Customer</button>
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
                                <button class="btn btn-outline-success w-100 mb-2" type="submit"><i class="bi bi-plus-lg"></i> Create New Customer</button>
                            </div>
                            <div class="col-12">
                                <button :class="{'mb-2':formValidationAlert, '': !formValidationAlert}" class="btn btn-outline-danger w-100" type="submit" @click="toggleRegistrationForm"><i class="bi bi-arrow-left"></i> Back</button>
                            </div>
                        </div>
                        <div class="row" v-if="formValidationAlert">
                            <div class="col-12">
                                <p class="mb-0 text-danger">Please fill up the required fields!</p>
                            </div>
                        </div>
                    </form>
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
            this.$emit('toggle-loading', false);
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
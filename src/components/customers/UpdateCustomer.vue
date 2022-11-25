<template>
    <div class="col-12">
        <h5><strong>Update {{firstName}} {{lastName}}'s Details</strong></h5>
        <form method="POST" @submit.prevent="updateCustomerDetail">
            <div class="row">
                <div class="col-12">
                    <label class="d-flex justify-content-start" for="firstName">Customer First Name</label>
                    <input type="text" class="form-control mb-2" placeholder="Enter customer First Name.." name="firstName" id="firstName" v-model="firstName"/>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <label class="d-flex justify-content-start" for="lastName">Customer Last Name</label>
                    <input type="text" class="form-control mb-2" placeholder="Enter customer Last Name.." name="lastName" id="lastName" v-model="lastName"/>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <label class="d-flex justify-content-start" for="age">Customer Age</label>
                    <input type="number" class="form-control mb-2" placeholder="Enter customer Age.." name="age" id="age" v-model="age"/>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <label class="d-flex justify-content-start" for="mobileNo">Mobile Number</label>
                    <input type="number" class="form-control mb-2" placeholder="Enter mobile no.." name="mobileNo" id="mobileNo" v-model="mobileNo"/>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <label class="d-flex justify-content-start" for="email">Email Address</label>
                    <input type="email" class="form-control mb-2" placeholder="Enter email address.." name="email" id="email" v-model="email"/>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <button class="btn btn-outline-success w-100 mb-2" type="submit"><i class="bi bi-pencil-square"></i> Update Details</button>
                </div>
                <div class="col-12">
                    <button class="btn btn-outline-danger mb-2 w-100" @click="closeEdit(false)"><i class="bi bi-arrow-left"></i> Back</button>
                </div>
            </div>
        </form>
        <p class="text-success mb-0" v-if="this.isUpdateSuccess">Updated Successfully!</p>
        <p class="text-danger mb-0" v-if="!this.isUpdateSuccess && this.isUpdateSuccess !== undefined">Update was unsuccessful!</p>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    props: ['customer', 'toggleEdit', 'isLoading'],
    emits: ['toggle-edit', 'toggle-loading'],
    data(){
        return {
            updateEndPoint: 'http://localhost:3000/customers/edit/',
            id: this.customer.id,
            firstName: this.customer.firstName,
            lastName: this.customer.lastName,
            age: this.customer.age,
            mobileNo: this.customer.mobileNo,
            email: this.customer.email,
            isUpdateSuccess: undefined,
        };
    },
    methods: {
        async updateCustomerDetail() {
            this.$emit('toggle-loading', true);
            await axios.post(this.updateEndPoint + this.id, {
                "id": this.id,
                "firstName": this.firstName,
                "lastName": this.lastName,
                "age": this.age,
                "mobileNo": this.mobileNo,
                "email": this.email,
            })
            .then(() => {
                this.isUpdateSuccess = true;
            })
            .catch(() => {
                this.isUpdateSuccess = false;
            });

            setTimeout(() => this.closeEdit() ,5000)
            
            this.$emit('toggle-loading', false);
        },
        closeEdit(val) {
            return this.$emit('toggle-edit', val);
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

p {
    display: inline-block;
    word-wrap: break-word;
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
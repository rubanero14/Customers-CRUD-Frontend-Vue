<template>
  <div class="col-12">
    <div
      class="d-flex justify-content-between align-items-center text-secondary"
    >
      <h5 class="text-secondary">
        Update {{ firstName }} {{ lastName }}'s Info
      </h5>
      <ToolTip :toolTipText="'Update ' + customer.firstName + ' ' + customer.lastName + '\'s Info'">
        <SvgLg :viewBox="'0 0 640 512'" :d="'M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z'" />
      </ToolTip>
      <div class="tooltip">
        
        <span class="tooltiptext"></span>
      </div>
    </div>
    <hr class="my-2" />
    <form method="POST" @submit.prevent="updateCustomerDetail">
      <div class="row">
        <div class="col-12">
          <label
            class="d-flex justify-content-start text-secondary"
            for="firstName"
            >Customer First Name</label
          >
          <input
            type="text"
            class="form-control mb-2"
            placeholder="Enter customer First Name.."
            name="firstName"
            id="firstName"
            v-model="firstName"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <label
            class="d-flex justify-content-start text-secondary"
            for="lastName"
            >Customer Last Name</label
          >
          <input
            type="text"
            class="form-control mb-2"
            placeholder="Enter customer Last Name.."
            name="lastName"
            id="lastName"
            v-model="lastName"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <label class="d-flex justify-content-start text-secondary" for="age"
            >Customer Age</label
          >
          <input
            type="number"
            class="form-control mb-2"
            placeholder="Enter customer Age.."
            name="age"
            id="age"
            v-model="age"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <label
            class="d-flex justify-content-start text-secondary"
            for="mobileNo"
            >Mobile Number</label
          >
          <input
            type="tel"
            class="form-control mb-2"
            placeholder="Enter mobile no.."
            name="mobileNo"
            id="mobileNo"
            v-model="mobileNo"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <label class="d-flex justify-content-start text-secondary" for="email"
            >Email Address</label
          >
          <input
            type="email"
            class="form-control mb-2"
            placeholder="Enter email address.."
            name="email"
            id="email"
            v-model="email"
          />
        </div>
      </div>
      <hr class="my-2" />
      <div class="row">
        <div class="col-12">
          <button class="btn btn-outline-success w-100 mb-2" type="submit">
            <SvgSm :viewBox="'0 0 448 512'" :d="'M224 256c-35.2 0-64 28.8-64 64c0 35.2 28.8 64 64 64c35.2 0 64-28.8 64-64C288 284.8 259.2 256 224 256zM433.1 129.1l-83.9-83.9C341.1 37.06 328.8 32 316.1 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V163.9C448 151.2 442.9 138.9 433.1 129.1zM128 80h144V160H128V80zM400 416c0 8.836-7.164 16-16 16H64c-8.836 0-16-7.164-16-16V96c0-8.838 7.164-16 16-16h16v104c0 13.25 10.75 24 24 24h192C309.3 208 320 197.3 320 184V83.88l78.25 78.25C399.4 163.2 400 164.8 400 166.3V416z'" />
            Save
          </button>
        </div>
        <div class="col-12">
          <button
            class="btn btn-outline-danger mb-2 w-100"
            @click="closeEdit(false)"
          >
            <SvgSm :viewBox="'0 0 512 512'" :d="'M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z'" />
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
    <p class="text-success text-center mb-0" v-if="this.isUpdateSuccess">
      Update was successful!
    </p>
    <p
      class="text-danger text-center mb-0"
      v-if="!this.isUpdateSuccess && this.isUpdateSuccess !== undefined"
    >
      Update was unsuccessful!
    </p>
  </div>
</template>
<script>
import axios from "axios";
import ToolTip from '../UI/ToolTip.vue';
import SvgSm from "../UI/SvgSm.vue";
import SvgLg from "../UI/SvgLg.vue";

export default {
  props: ["customer", "toggleEdit", "isLoading"],
  emits: ["toggle-edit", "toggle-loading"],
  components: {
    ToolTip,
    SvgSm,
    SvgLg,
  },
  data() {
    return {
      updateEndPoint:
        "http://localhost:3000/customers/edit/",
      id: this.customer.id,
      firstName: this.customer.firstName,
      lastName: this.customer.lastName,
      age: this.customer.age,
      mobileNo: this.customer.mobileNo,
      email: this.customer.email,
      isUpdateSuccess: undefined,
      formValidationAlert: false,
    };
  },
  methods: {
    async updateCustomerDetail() {
      this.$emit("toggle-loading", true);
      if (
        this.firstName === "" ||
        this.lastName === "" ||
        this.age === null ||
        this.mobileNo === null ||
        this.email === ""
      ) {
        return (this.formValidationAlert = true);
      } else {
        this.formValidationAlert = false;
      }

      await axios
        .post(this.updateEndPoint + this.id, {
          id: this.id,
          firstName: this.firstName,
          lastName: this.lastName,
          age: this.age,
          mobileNo: this.mobileNo,
          email: this.email,
        })
        .then(() => {
          this.isUpdateSuccess = true;
        })
        .catch(() => {
          this.isUpdateSuccess = false;
        });

      // Garbage Collection for alerts
      setTimeout(() => {
        this.isUpdateSuccess = undefined;
        this.closeEdit();
      }, 3000);

      this.$emit("toggle-loading", false);
    },
    closeEdit(val) {
      return this.$emit("toggle-edit", val);
    },
  },
};
</script>
<style scoped>
label::after {
  content: "*";
  margin-left: 3px;
  color: red;
}

p {
  display: inline-block;
  word-wrap: break-word;
  text-align: start;
}

@media (max-width: 768px) {
  .btn {
    width: 100%;
  }
}
</style>

<template>
  <LoadingSpinner v-if="this.$store.getters.isLoading && !this.isEditDetail" />
  <div class="col-12" v-if="customers.length > 0">
    <center>
      <div v-if="!isViewDetails">
        <h1 class="text-secondary mb-3"><strong>List of Customers</strong></h1>
        <transition
          v-for="(customer, index) in customers"
          :key="index"
          appear
          name="fade"
          mode="out-in"
        >
          <CardComponent class="mb-3 me-0 me-lg-3" :style="{ '--i': index }">
            <center :key="customer.id" :id="customer.id">
              <div
                class="d-flex justify-content-between align-items-center text-secondary"
              >
                <h5>Customer Profile</h5>
                <ToolTip
                  :toolTipText="
                    customer.firstName + ' ' + customer.lastName + '\'s Profile'
                  "
                >
                  <SVG
                    :size="'lg'"
                    :viewBox="'0 0 448 512'"
                    :d="'M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z'"
                  />
                </ToolTip>
              </div>
              <hr class="my-2" />
              <div>
                <p class="text-secondary mb-1">
                  Customer ID: <strong>{{ customer.id.toUpperCase() }}</strong>
                </p>
                <p class="text-secondary mb-2">
                  Customer Name:
                  <strong>{{
                    customer.firstName + " " + customer.lastName
                  }}</strong>
                </p>
                <button
                  class="d-block btn btn-outline-secondary"
                  @click="viewDetails(customer)"
                >
                  <SVG
                    :size="'sm'"
                    :viewBox="'0 0 512 512'"
                    :d="'M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'"
                  />
                  View Details
                </button>
              </div>
            </center>
          </CardComponent>
        </transition>
      </div>
      <transition appear name="fade" mode="out-in" v-else>
        <CardComponent>
          <center>
            <div :id="customer.id" v-if="!isEditDetail">
              <div
                class="d-flex justify-content-between align-items-center text-secondary"
              >
                <h5 class="text-secondary">
                  {{ this.isDelete ? "Delete" : "" }}
                  {{ customer.firstName + " " + customer.lastName }}'s Info
                </h5>
                <div>
                  <ToolTip
                    :toolTipText="
                      'Delete ' +
                      customer.firstName +
                      ' ' +
                      customer.lastName +
                      '\'s Info'
                    "
                    v-if="this.isDelete"
                  >
                    <SVG
                      :size="'lg'"
                      :viewBox="'0 0 640 512'"
                      :d="'M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L353.3 251.6C407.9 237 448 187.2 448 128C448 57.3 390.7 0 320 0C250.2 0 193.5 55.8 192 125.2L38.8 5.1zM264.3 304.3C170.5 309.4 96 387.2 96 482.3c0 16.4 13.3 29.7 29.7 29.7H514.3c3.9 0 7.6-.7 11-2.1l-261-205.6z'"
                    />
                  </ToolTip>
                  <ToolTip
                    :toolTipText="
                      customer.firstName + ' ' + customer.lastName + '\'s Info'
                    "
                    v-else
                  >
                    <SVG
                      :size="'lg'"
                      :viewBox="'0 0 512 512'"
                      :d="'M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'"
                    />
                  </ToolTip>
                </div>
              </div>
              <hr class="my-2" />
              <p class="text-secondary mb-1">
                Customer ID: <strong>{{ customer.id.toUpperCase() }}</strong>
              </p>
              <p class="text-secondary mb-1">
                Customer Name:
                <strong>{{
                  customer.firstName + " " + customer.lastName
                }}</strong>
              </p>
              <p class="text-secondary mb-1">
                Customer Mobile No: <strong>{{ customer.mobileNo }}</strong>
              </p>
              <p class="text-secondary mb-1">
                Customer Age: <strong>{{ customer.age }}</strong>
              </p>
              <p class="text-secondary mb-2">
                Customer Email: <strong>{{ customer.email }}</strong>
              </p>
              <hr class="my-2" />
              <div v-show="!this.isDelete">
                <button
                  class="btn btn-outline-danger mb-2"
                  @click="this.isDelete = true"
                >
                  <SVG
                    :size="'sm'"
                    :viewBox="'0 0 448 512'"
                    :d="'M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z'"
                  />
                  Delete
                </button>
                <br />
                <button
                  class="btn btn-outline-primary mb-2"
                  @click="editDetails(customer)"
                >
                  <SVG
                    :size="'sm'"
                    :viewBox="'0 0 640 512'"
                    :d="'M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z'"
                  />
                  Edit
                </button>
                <br />
                <button
                  class="btn btn-outline-success mb-2"
                  @click="this.isViewDetails = false"
                >
                  <SVG
                    :size="'sm'"
                    :viewBox="'0 0 512 512'"
                    :d="'M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z'"
                  />
                  Back
                </button>
              </div>
              <p v-show="this.isDelete" class="text-danger text-center mb-2">
                <strong>
                  Are you sure to delete
                  {{ customer.firstName + " " + customer.lastName }}'s details?
                </strong>
              </p>
              <div v-show="this.isDelete">
                <button
                  class="btn btn-outline-danger mb-2"
                  @click="deleteCustomer(customer.id)"
                >
                  <SVG
                    :size="'sm'"
                    :viewBox="'0 0 448 512'"
                    :d="'M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z'"
                  />
                  Yes
                </button>
                <br />
                <button
                  class="btn btn-outline-success mb-2"
                  @click="this.isDelete = false"
                >
                  <SVG
                    :size="'sm'"
                    :viewBox="'0 0 512 512'"
                    :d="'M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z'"
                  />
                  No
                </button>
                <p
                  class="text-success text-center mb-0"
                  v-if="this.isDeleteSuccess"
                >
                  Deleted Successfully!
                </p>
                <p
                  class="text-danger text-center mb-0"
                  v-if="
                    !this.isDeleteSuccess && this.isDeleteSuccess !== undefined
                  "
                >
                  Delete was unsuccessful!
                </p>
              </div>
            </div>
            <UpdateCustomer
              :customer="customer"
              @toggle-edit="isEditDetail = newValue"
              :isEditDetail="isEditDetail"
              v-else
            />
          </center>
        </CardComponent>
      </transition>
    </center>
  </div>
  <div class="col-12" v-else>
    <p
      class="text-center text-secondary no-clients-alert mb-0"
      v-if="this.isFetchingData"
    >
      Please wait, data being fetched from server...
    </p>
    <p class="text-center text-secondary no-clients-alert mb-0" v-else>
      No clients registered for now. Register a new one?
    </p>
  </div>
</template>
<script>
import axios from "axios";
import CardComponent from "../UI/CardComponent.vue";
import UpdateCustomer from "./UpdateCustomer.vue";
import ToolTip from "../UI/ToolTip.vue";
import SVG from "../UI/SVG.vue";
import LoadingSpinner from "../UI/LoadingSpinner.vue";

export default {
  props: ["customers", "isFetchingData"],
  data() {
    return {
      isViewDetails: false,
      isEditDetail: false,
      isDelete: false,
      isDeleteSuccess: undefined,
      deleteEndpoint: "http://localhost:3000/deleteUser",
    };
  },
  components: {
    CardComponent,
    UpdateCustomer,
    ToolTip,
    SVG,
    LoadingSpinner,
  },
  mounted() {
    setInterval(() => {
      this.setAppTitle();
    }, 500);
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
      this.$store.dispatch("isLoading", true);

      await axios
        .post(this.deleteEndpoint, id)
        .then(() => {
          this.isDeleteSuccess = true;
        })
        .catch(() => {
          this.isDeleteSuccess = false;
        });

      // Garbage Collection for alerts
      setTimeout(() => {
        this.$store.dispatch("isLoading", false);
        this.isDelete = false;
        this.isDeleteSuccess = undefined;
        this.isViewDetails = false;
      }, 3000);
    },
    setAppTitle() {
      // Set App Title
      if (this.isViewDetails && this.isDelete) {
        document.title = `Delete ${this.customer.firstName} ${this.customer.lastName}'s Info - CIM`;
      }

      if (this.isViewDetails && !this.isDelete) {
        document.title = `${this.customer.firstName} ${this.customer.lastName}'s Info - CIM`;
      }

      if (this.isEditDetail) {
        document.title = `Update ${this.customer.firstName} ${this.customer.lastName}'s Info - CIM`;
      }
    },
  },
};
</script>
<style scoped>
.no-clients-alert {
  font-weight: bold;
  font-size: 20px;
}
.btn {
  width: 300px;
}

p {
  text-align: start;
}

@media (max-width: 768px) {
  .btn {
    width: 100%;
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

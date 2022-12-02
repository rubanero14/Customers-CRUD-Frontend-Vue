<template>
    <transition appear name="fade" mode="out-in">
        <div class="centered overlay">
            <div class="d-flex justify-content-center align-items-end alert-wrapper">
                <div class="alert d-flex justify-content-center align-items-center mb-5 mb-md-4 mx-2" :class="{ 'alert-danger': danger, 'alert-success': success }" role="alert">
                    <div class="me-2">
                        <strong>
                            <span v-show="success">
                                {{ message }}
                            </span>
                            <span v-show="danger">
                                {{ message }}
                            </span>
                        </strong>
                    </div>
                    <SVG v-show="success" class="mb-0" :size="'lg'" :viewBox="'0 0 512 512'" :d="'M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z'" />
                    <SVG v-show="danger" class="mb-0" :size="'lg'" :viewBox="'0 0 512 512'" :d="'M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z'" />
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import SVG from './SVG.vue';

export default {
    props: ['message', 'danger', 'success'],
    components: {
        SVG,
    },
}
</script>
<style scoped>
.overlay {
    position: absolute;
    z-index: 10000;
    background: rgba(0, 0, 0, 0.5%);
    position: fixed;
    top: 0;
    left: 0;
}

.alert-wrapper {
    width: 100%;
    height: 100%;
    z-index: 10001;
}
.alert {
    position: relative;
    padding: 1rem 5rem;
    border: 1px solid transparent;
    border-radius: 8px;
    font-size: 16px;
    min-width: 360px;
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
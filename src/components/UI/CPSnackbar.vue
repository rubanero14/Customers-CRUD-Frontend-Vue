<template>
    <div class="centered overlay">
        <div class="d-flex justify-content-center align-items-center spinner">
            <transition 
                appear
                name="fade"
                mode="out-in"
            >
                <div class="alert" :class="{ 'alert-danger': this.snackBarView === 404 || this.snackBarView === 503, 'alert-success': this.snackBarView === 200 }" role="alert">
                    <span v-if="(this.snackBarView === 404)">Network Offline!</span>
                    <span v-else-if="(this.snackBarView === 503)">Server Offline!</span>
                    <span v-else>Back Online!</span>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
export default {
    props: ['snackBarView'],
}
</script>
<style scoped>
.overlay {
    z-index: 10000;
    background: rgba(255, 255, 255, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.alert {
    position: relative;
    padding: 1rem 5rem;
    margin-bottom: 0px;
    border: 1px solid transparent;
    border-radius: 8px;
    font-size: 16px;
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
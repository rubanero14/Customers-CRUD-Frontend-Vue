<template>
    <div class="centered overlay">
        <div class="d-flex spinner">
            <div :style="{ '--j':1 }" class="mx-1 spinner-grow one" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div :style="{ '--j':2 }" class="mx-1 spinner-grow two" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div :style="{ '--j':3 }" class="mx-1 spinner-grow three" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style scoped>
.overlay {
    z-index: 10000;
    background: rgba(255, 255, 255, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.spinner {
    position: relative;
    top: 50%;
    left: 45%;
}
 /* Spinner Section */
.spinner-grow{
    width: 1rem !important;
    height: 1rem !important;
}
.spinner-grow.one {
    animation: 0.75s linear infinite spinner-grow;
    animation-delay: 0s;
}
 .spinner-grow.two {
    animation: 0.75s linear infinite spinner-grow;
    animation-delay: 0.15s;
 }
 .spinner-grow.three {
    animation: 0.75s linear infinite spinner-grow;
    animation-delay: 0.3s;
 }
</style>
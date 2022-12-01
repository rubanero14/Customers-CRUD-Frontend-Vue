<template>
    <div class="centered overlay">
        <div class="d-flex justify-content-center align-items-center spinner">
            <div class="mx-1 spinner-grow one" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="mx-1 spinner-grow two" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="mx-1 spinner-grow three" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style>
.overlay {
    z-index: 10000;
    background: rgba(255, 255, 255, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.spinner {
    z-index: 10001;
    width: 100%;
    height: 100%;
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
<template>
    <div class="card d-inline-block">
        <slot />
    </div>
</template>
<script>
</script>
<style scoped>
.card {
    cursor: pointer;
    box-shadow: 0px 4px 16px 0px rgb(0 0 0 / 20%);
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.2s ease-out;
    background-clip: padding-box;
    background: transparent;
    padding: 30px;
    width: fit-content;
}
</style>
<template>
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" :viewBox="this.viewBox">
        <path :d="this.d" />
    </svg>
</template>
<script>
export default {
    props: ["viewBox", "d"],
}
</script>
<style>
svg.icon {
    width: 16px;
    fill: currentColor;
    margin-bottom: 0.25rem;
}
</style>
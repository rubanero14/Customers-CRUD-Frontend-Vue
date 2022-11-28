<template>
    <svg class="icon lg" xmlns="http://www.w3.org/2000/svg" :viewBox="this.viewBox">
        <path :d="this.d" />
    </svg>
</template>
<script>
export default {
    props: ["viewBox", "d"],
}
</script>
<style>
svg.icon.lg {
    width: 20px;
    fill: currentColor;
    margin-bottom: 0.5rem;
}
</style>
<template>
    <svg class="icon " :class="this.size" xmlns="http://www.w3.org/2000/svg" :viewBox="this.viewBox">
        <path :d="this.d" />
    </svg>
</template>
<script>
export default {
    props: ["viewBox", "d", "size"],
}
</script>
<style>
svg.icon {
    fill: currentColor;
}

svg.icon.sm {
    width: 16px;
    margin-bottom: 0.25rem;
}

svg.icon.lg {
    width: 20px;
    margin-bottom: 0.5rem;
}
</style>
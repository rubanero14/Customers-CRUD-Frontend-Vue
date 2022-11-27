<template>
    <div class="tooltip">
        <slot />
        <span class="tooltiptext">{{ this.toolTipText }}</span>
    </div>
</template>
<script>
export default {
    props: ['toolTipText']
};
</script>
<style scoped>
.tooltip {
    position: relative;
    opacity: 1;
}

.tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 4px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #333 transparent;
}

.tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
}
</style>
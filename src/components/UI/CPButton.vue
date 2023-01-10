<template>
    <button v-if="this.btnType !== 'link'" class="btn " :type="this.btnType !== 'button' && this.btnType !== 'link' ? this.btnType : 'button'" :class="this.btnClass" :disabled="this.disabled"><slot /></button>
    <a :href="this.href" class="btn " :class="this.btnClass" target="_blank" :disabled="this.disabled" v-else><slot /></a>
</template>
<script>
export default {
    props: ["btnClass", "btnType", "disabled"],
}
</script>
<style>
.btn {
    width: 300px;
    text-decoration: none;
}

.toggle-btn-registration {
    width: 100%;
}

@media (max-width: 768px) {
    .btn {
        width: 100%;
    }
}
</style>
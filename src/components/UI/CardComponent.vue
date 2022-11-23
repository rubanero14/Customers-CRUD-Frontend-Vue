<template>
    <div class="card d-inline-block mb-3 me-3">
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
.card.logo {
    height: 120px;
    width: 120px;
    border-radius: 20px;
    overflow: hidden;
}
.card.tile {
    border-radius: 8px;
}
.card.logo:hover {
    transform: scale(0.85);
}
@media (min-width: 768px) and (max-width: 992px) {
    .card.logo {
        height: 80px;
        width: 80px;
        border-radius: 12px;
    }
}
@media (min-width: 476px) and (max-width: 768px) {
    .card.logo {
        height: 70px;
        width: 70px;
        border-radius: 8px;
    }
}
@media (min-width: 300px) and (max-width: 476px) {
    .card.logo {
        height: 50px;
        width: 50px;
        border-radius: 4px;
    }
}
@media (max-width: 300px) {
    .card.logo {
        height: 40px;
        width: 40px;
        border-radius: 4px;
    }
}
</style>
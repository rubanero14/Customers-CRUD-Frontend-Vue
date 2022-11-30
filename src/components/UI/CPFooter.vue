<template>
    <footer class="text-center text-sm-start px-4 py-2">
        <hr />
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <p class="text-secondary">
                        {{updateDate()}} &copy; Capital Platforms
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    methods:{
        updateDate(){
            return new Date().getFullYear();
        },
    },
};
</script>
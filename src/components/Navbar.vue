<template>
    <nav class="navbar fixed-top bg-dark navbar-dark navbar-expand-sm">
        <div class="container">
            <div class="navbar-brand" @click="$router.push('/')">
                <img src="@/assets/logo.svg" width="30" height="30">
                DuckTime
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarToggler">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <div @click="$router.push('/stopwatch')" class="nav-link active">Stopwatch</div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped >
    .navbar-brand{
        cursor: pointer;
    }
    .nav-item{
        cursor: pointer;
        color: black;
    }
</style>
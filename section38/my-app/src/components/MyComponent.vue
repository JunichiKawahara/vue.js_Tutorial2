<template>
    <div>
    <h2>MyComponent</h2>
    <p>counter=<span>{{ counter }}</span></p>
    </div>
</template>
<script>
export default {
    props: ['counter']
}
</script>
<style scoped>
span {
    color: #f00;
    font-weight: bold;
}
</style>
<template>
    <div class="content xl:w-2/3 2xl:w-1/2 w-full" v-html="content" />
</template>

<script>
export default {
    props: {
        content: String
    }
};
</script>

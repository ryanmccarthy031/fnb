<template>
    <div class="content" v-html="content" />
</template>

<script>
export default {
    props: {
        content: String
    }
};
</script>

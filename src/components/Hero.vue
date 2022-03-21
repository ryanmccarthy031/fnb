<template>
    <div class="flex flex-col">
        <h1>
            {{ $t("heroTitle") }}
        </h1>
        <p>
            {{ $t("heroContent") }}
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            settings: require("../../data/theme.json")
        };
    }
};
</script>

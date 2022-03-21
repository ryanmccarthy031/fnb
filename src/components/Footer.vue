<template>
    <footer>
        <a class="p-4" :href="$t('copyrightLink')">{{ $t("copyright") }}</a>
    </footer>
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

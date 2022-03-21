<template>
    <div class="bg-transparent">
        <select
            v-model="locale"
            @change="localeChanged"
            name="locale"
            id="locale"
        >
            <option
                v-for="(lang, index) in availableLocales"
                :key="`language-${index}`"
                :value="lang"
            >
                {{ $t(lang) }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    data() {
        return {
            locale: this.$i18n.locale.toString(),
            availableLocales: this.$i18n.availableLocales
        };
    },
    methods: {
        localeChanged() {
            this.$router.push({
                path: this.$tp(this.$route.path, this.locale, true)
            });
            this.$i18n.locale = this.locale;
        }
    }
};
</script>

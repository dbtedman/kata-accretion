<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<template>
    <div class="application-logo">
        <div class="application-logo__inner">
            <div class="application-logo__icon">
                <FontAwesomeIcon icon="fa-solid fa-layer-group" />
            </div>
            <div class="application-logo__name">Accretion</div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "./spa/theme/sizes";
@import "./spa/theme/colours";

.application-logo {
    padding: $size-grid $size-grid $size-grid $size-grid * 2;
    display: flex;
    width: 100%;

    &__inner {
        display: flex;
        flex-direction: row;
    }

    &__icon {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-right: $size-grid * 1.5;
        color: $colour-highlight;
        font-size: 1.2em;
        line-height: 1em;
    }

    &__name {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 1.1em;
        font-weight: 400;
        line-height: 1em;
        color: $colour-foreground-text;
    }
}
</style>

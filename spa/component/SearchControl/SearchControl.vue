<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<template>
    <div class="search-control">
        <div class="search-control__inner">
            <button class="search-control__icon">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </button>
            <input class="search-control__input" placeholder="Search" />
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "./spa/theme/sizes";
@import "./spa/theme/colours";

.search-control {
    background-color: #fff;
    padding: $size-grid;
    display: flex;

    &__inner {
        display: flex;
    }

    &__icon {
        display: flex;
        padding: 0 $size-grid * 1.5;
        margin: 0;
        flex-direction: column;
        justify-content: center;
        border-radius: 1rem 0 0 1rem;
        background: $colour-background;
        border: none;
        font-size: $size-grid * 1.5;
        color: $colour-background-text;
    }

    &__input {
        display: flex;
        background: $colour-background;
        border: none;
        padding: 0;
        margin: 0;
        width: $size-grid * 40;
        border-radius: 0 1rem 1rem 0;
        font-size: 16px;
        font-weight: 300;

        &:focus {
            outline: none;
        }
    }
}
</style>

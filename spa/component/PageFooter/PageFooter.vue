<script setup lang="ts">
function year() {
    return new Date().getFullYear();
}
</script>

<template>
    <footer class="footer">
        <div class="footer-copyright">
            <div class="footer-copyright-text">
                <font-awesome-icon icon="fas-regular fa-copyright" />
                <span v-text="year()" /> Daniel Tedman
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
@import "./spa/theme/colours";

.footer {
    height: 6rem;
    flex-direction: column;
}

.footer-copyright {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
}

.footer-copyright-text {
    color: $colour-background-text;
    line-height: 1em;
}

.fa-copyright {
    margin-right: 0.25rem;
    font-size: 0.9em;
}
</style>

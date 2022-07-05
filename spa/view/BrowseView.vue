<script setup lang="ts">
import { useNavigationStore } from "@/store/navigation";
import { useRouter } from "vue-router";

const navigation = useNavigationStore();
const router = useRouter();

function currentRouteName(): string {
    return router.currentRoute.value.name as string;
}
</script>

<template>
    <main>
        <h1>
            Browse
            {{ navigation.navigationLabelForRouteName(currentRouteName()) }}
        </h1>
    </main>
</template>

<script lang="ts" setup>
import { defineProps, onMounted, ref } from 'vue';

const props = defineProps({
    date: String,
    authorName: String,
    authorUrl: String,
    content: String,
    contentPostTones: Array,
});

let post = ref("");

const convertDate = (date) => {
    return new Intl.DateTimeFormat('ru', {
        dateStyle: 'long',
        timeStyle: 'short'
    }).format(date)
}

const createTone = tone => (tone + 1) / 2 * 120;

onMounted(() => {
    const currentPost = props.content;

    let currentStringIndex = 0;

    for (let i = 0; i < props.contentPostTones.length; i++) {
        const currentTone = props.contentPostTones[i];

        post.value += currentPost.slice(currentStringIndex, currentTone.position);
        post.value += `<span style="background-color: hsl(${createTone(currentTone.tone)}, 90%, 50%)">`;
        post.value += currentPost.slice(currentTone.position, currentTone.position + currentTone.length);
        post.value += "</span>";

        currentStringIndex = currentTone.position + currentTone.length;
    }

    post.value += currentPost.slice(currentStringIndex);
})
</script>

<template>
    <li class="post">
        <div class="post__top">
            <span class="post__date">{{ convertDate(new Date(date)) }} / </span>
            <span class="post__author">{{ authorName }}</span>
            <a class="post__link" :href="authorUrl" target="_blank"> / {{ authorUrl }}</a>
        </div>

        <div class="post__content" v-html="post"></div>
    </li>
</template>

<style scoped>
.post {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &:not(:last-child) {
        padding-bottom: 10px;
        border-bottom: 1px solid #aab4bd;
    }
}

.post__author {
    font-weight: bold;
    color: #833a3a;
}

.post__link {
    text-decoration: none;
    color: inherit;
}
</style>

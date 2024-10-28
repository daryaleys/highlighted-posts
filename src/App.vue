<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import SinglePost from './components/SinglePost.vue';

const posts = ref([]), postsLoading = ref(false), errorLoading = ref("");

const fetchPosts = () => {
  postsLoading.value = true;

  fetch('/data/feed.json')
    .then((response) => response.json())
    .then((data) => posts.value = data)
    .catch(() => errorLoading.value = "Не удалось загрузить посты :(")
    .finally(() => postsLoading.value = false);
}

onMounted(() => {
  fetchPosts();
})
</script>

<template>
  <span v-if="errorLoading">{{ errorLoading }}</span>
  <ul class="post-list">
    <SinglePost v-for="post in posts" v-bind="post" />
  </ul>
</template>

<style>
.post-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
}
</style>

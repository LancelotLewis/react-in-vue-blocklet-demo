<template>
  <LayoutPure :changeLocale="changeLocale" :changeSession="changeSession">
    <slot />
  </LayoutPure>
</template>

<script setup>
import { ref, provide } from 'vue';
import { applyReactInVue, applyPureReactInVue } from 'veaury';
// 这是一个React组件
import LayoutReactComponent from '../react_app/Layout.jsx';

const Layout = applyReactInVue(LayoutReactComponent);
const LayoutPure = applyPureReactInVue(LayoutReactComponent);

const locale = ref('en');
const session = ref(null);
function changeLocale(value) {
  locale.value = value;
}
function changeSession(value) {
  session.value = value;
}

provide('locale', locale);
provide('session', session);
</script>

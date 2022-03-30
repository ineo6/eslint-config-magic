module.exports = {
  rules: {
    /**
     * prevent `<script setup>` variables used in `<template>` to be marked as unused
     */
    'vue/script-setup-uses-vars': 'error',
  },
};

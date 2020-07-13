<template>
  <div class="auth-page">
    <div class="auth-page__form form">
      <div class="form__title">Authorization</div>
      <input class="form__input" type="text">
      <input class="form__input" type="password">
      <button class="form__button">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthPage',
}
</script>

<style lang="scss" scoped>
.auth-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
<template>
  <div class="auth-page">
    <div class="auth-page__form form">
      <div class="form__title">Authorization</div>
      <input class="form__input" type="text" placeholder="login" v-model="login" @input="clearError()" >
      <input class="form__input" type="password" placeholder="password" v-model="password" @input="clearError()" >
      <button
        :class="['form__button', { 'form__button--disabled': isButtonDisabled }]"
        @click="loginButtonHandler()"
      >
        Login
      </button>
      <div v-if="isError" class="form__error">Не верный логин или пароль!</div>
      <div v-if="isSuccess" class="form__success">Вы успешно авторизовались!</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AuthPage',
  data() {
    return {
      login: '',
      password: '',
      isError: false,
      isSuccess: false,
      loading: false,
    }
  },
  computed: {
    isButtonDisabled() {
      return this.login.length === 0 || this.password.length === 0 || this.loading;
    },
  },
  methods: {
    ...mapActions({
      tryLogin: 'main/tryLogin',
    }),
    async loginButtonHandler() {
      if (!this.isButtonDisabled) {
        try {
          this.loading = true;
          await this.tryLogin({ login: this.login, password: this.password });
          this.isSuccess = true;
          await new Promise(res => setTimeout(res, 2000));
          this.$router.push({name: 'login-history'});
        } catch {
          this.isError = true;
        } finally {
          this.loading = false;
        }
      }
    },
    clearError() {
      this.isError = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.auth-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    &__title {
      font-weight: bold;
      margin-bottom: 10px;
    }
    &__input {
      height: 26px;
      border-radius: 8px;
      padding: 5px;
      margin-bottom: 10px;
      border: 1px solid grey;
      &:focus {
        outline: none;
        border: 1px solid greenyellow;
      }
    }
    &__button {
      background-color: #2daada;
      color: white;
      padding: 10px 16px;
      border-radius: 8px;
      border: 1px solid white;
      cursor: pointer;
      text-transform: uppercase;
      font-weight: bold;
      &:focus {
        outline: none;
      }
      &:active {
        background-color: #88d5f3;
      }
      &--disabled {
        background-color: grey;
        &:active {
          background-color: grey;
        }
      }
    }
    &__error {
      margin-top: 20px;
      color: red;
      position: absolute;
      bottom: -60px;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
    &__success {
      margin-top: 20px;
      color: greenyellow;
      position: absolute;
      bottom: -60px;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
  }
}
</style>
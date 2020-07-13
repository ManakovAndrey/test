<template>
  <div class="history-page">
    <div class="history-page__title">History page</div>
    <transition-group name="list">
      <div
        v-for="(atempt, index) in items"
        :key="atempt.text + index"
        :class="['history-page__item', atempt.type === 'success' ? 'history-page__item--success' : 'history-page__item--error']"
      >
        {{ atempt.text }}
      </div>
    </transition-group>
    <template v-if="!showHistoryList" >
      Журнал пуст
    </template>
    <button
      class="history-page__button"
      @click="clearList()"
    >
      Очистить историю
    </button>
    <button
      class="history-page__button"
      @click="LogOut()"
    >
      Выйдти из аккаунта
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'HistoryPage',
  data() {
    return {
      items: [],
    }
  },
  computed: {
    ...mapState({
      loginAttempts: state => state.loginHistory.loginAttempts,
    }),
    showHistoryList() {
      return this.loginAttempts.length > 0;
    },
  },
  methods: {
    ...mapActions({
      clearHistory: 'loginHistory/clearLoginAttempts',
      logout: 'main/logout',
    }),
    LogOut() {
      this.logout();
      this.$router.push({ name: 'authorization' });
    },
    clearList() {
      this.clearHistory();
      this.items = [];
    },
  },
  async mounted() {
    for (let i = 0; i < this.loginAttempts.length; i++) {
      this.items.push(this.loginAttempts[i]);
      await new Promise(res => setTimeout(res, 500));
    }
  }
}
</script>

<style lang="scss" scoped>
.history-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__title {
    font-weight: bold;
    margin-bottom: 15px;
  }
  &__item {
    margin-bottom: 10px;
    padding: 10px;
    display: inline-block;
    transition: all 1s;
    &--success {
      border: 1px solid greenyellow;
    }
    &--error {
      border: 1px solid red;
    }
  }
  &__button {
    background-color: #2daada;
    color: white;
    padding: 10px 16px;
    border-radius: 8px;
    border: 1px solid white;
    margin-bottom: 20px;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    &:focus {
      outline: none;
    }
    &:active {
      background-color: #88d5f3;
    }
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
  }
}
</style>
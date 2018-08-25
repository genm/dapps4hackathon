<template>
  <nav class="navbar is-white" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">

      <nuxt-link to="/" class="navbar-item title">MyHive</nuxt-link>
      <div class="navbar-burger" data-target="navMenu" v-on:click="toggleMenu" :class="{'is-active': isMenuActive}">
        <span></span>
        <span></span>
        <span></span>

      </div>
    </div><!-- navbar-brand END -->
    <div class="navbar-menu" id="navMenu" :class="{'is-active': isMenuActive}">
      <div class="navbar-end">
        <nuxt-link to="/" class="navbar-item">Top</nuxt-link>
        <nuxt-link to="/mylist" class="navbar-item">MyList</nuxt-link>
        <nuxt-link to="/registration" class="navbar-item">Registration</nuxt-link>
        <nuxt-link to="/registreted" class="navbar-item">Registreted</nuxt-link>
        <nuxt-link to="/submit" class="navbar-item">Give</nuxt-link>
        <nuxt-link to="/settings" class="navbar-item">Setting</nuxt-link>
        <!--<a class="navbar-item" v-if="isAuthed" v-on:click="logout">サインアウト</a>-->
        <!--<nuxt-link to="/login" class="navbar-item" v-if="!isAuthed">ログイン</nuxt-link>-->
        <!--<nuxt-link to="/" class="navbar-item" v-if="!isAuthed">新規登録</nuxt-link>-->

      </div>
    </div><!-- navbar-menu END -->
  </nav>
</template>

<script>
  export default {
    components: {

    },
    data: () => {
      return {
        isMenuActive: false,
      }
    },
    methods: {
      toggleMenu () {
        this.isMenuActive = !this.isMenuActive
      },
    },
  }
</script>

<style scoped>
  .title {
    font-family: Arial, sans-serif; /* 1 */
    display: block;
    font-weight: bold;
    font-size: 25px;
    color: #35495e;
    letter-spacing: 1px;
  }
</style>

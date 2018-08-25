<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        MyHive
      </h1>
      <h2 class="subtitle">
        Alphive LLC.
      </h2>
      <div class="links">
        <nuxt-link to="neo_playground">
          <p class="button--green">Neo Playground</p>
        </nuxt-link>
        <nuxt-link to="registration">
          <p class="button--grey">Registration</p>
        </nuxt-link>
        <nuxt-link to="registreted">
          <p class="button--grey">Registreted</p>
        </nuxt-link>
        <nuxt-link to="submit">
          <p class="button--grey">Submit</p>
        </nuxt-link>

      </div>
    </div>
  </section>
</template>

<script>

export default {
  components: {
    AppLogo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>


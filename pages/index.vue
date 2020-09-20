<template>
  <div class="container">
    <header class="content-logos">
      <img src="/svg/logo.svg" width="256px" height="256px" />
    </header>
    <h1 class="title">{{ $t('home.title') }}</h1>
    <h2 class="subtitle">{{ $t('home.subtitle') }}</h2>
  </div>
</template>

<script>
export default {
  components: {},
  head() {
    return {
      title: `${this.$t('links.home')} · Les Brakasssss'`,
    }
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 55px;
  color: #35495e;
  letter-spacing: 1px;
  margin: 25px 0;
}

.subtitle {
  font-weight: 300;
  font-size: 1.1rem;
  color: #526488;
  word-spacing: 2px;
  padding-bottom: 15px;
  max-width: 50%;
}

.content-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 500px;
}
</style>

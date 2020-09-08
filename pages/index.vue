<template>
  <div class="container">
    <header class="content-logos">
      <logo />
    </header>
    <h1 class="title">Bienvenue sur le site officiel des Brakasssss'</h1>
    <h2 class="subtitle">
      Le site est encore en construction, nous vous invitons à revenir plus
      tard. Ne retenez pas votre respiration en attendant, ça risquerait de vous
      être fatal.
    </h2>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  },
  head() {
    return {
      title: "Accueil · Les Brakasssss'",
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

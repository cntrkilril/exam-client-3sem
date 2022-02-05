<template>
    <header class="header">
      <div class="header__logo-block logo-block">
        <p class="logo-block__logo">"Деловая колбаса"</p>
      </div>
      <div class="header__name-block name-block">
        <p class="name-block__text">Логистическая компания</p>
      </div>
    </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="css">
    .header {
      display: grid;
      background-color: #363636;
      grid-template-columns: 1fr 5fr;
    }
    .logo-block {
      padding: 1rem;
      display: flex;
      justify-items: center;
      align-items: center;
    }
    .logo-block__logo {
      padding: 0;
      margin: 0;
      color: white;
      font-weight: bold;
      text-align: center;
      width: 100%;
    }
    .name-block {
      padding: 1rem;
      padding-left: 0;
      display: flex;
    }
    .name-block__text {
      padding: 0;
      margin: 0;
      color: white;
    }
</style>

<template>
  <header class="header">
    <div class="container">
      <nav class="header__nav">
        <ul class="header__menu">
          <li class="header__item">
            <router-link to="/" class="header__link"> Home </router-link>
          </li>
          <li class="header__item">
            <router-link to="/portfolio" class="header__link">
              Protfolios
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  padding: 30px 0;
  background-color: rgba($black, 0.7);

  &__menu {
    list-style: none;
    padding: 0;
    margin: 0;

    display: flex;
  }

  &__item {
    padding: 0 30px;
  }

  &__link {
    position: relative;
    display: block;
    font-size: 2rem;
    padding: 10px;

    &::after {
      content: '';

      position: absolute;
      left: 0;
      bottom: 0;

      display: block;

      width: 0;
      height: 1px;
      background-color: white;

      transition: all 0.33s;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  }
}
</style>

<script setup>

</script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="/">
            Home
          </router-link>
        </li>
        <li>
          <router-link to="/basic">
            Basic Usage
          </router-link>
        </li>
        <li>
          <router-link to="/divider">
            Divider Usage
          </router-link>
        </li>
        <li>
          <router-link to="/datetime">
            Date Time Usage
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
  <section>
    <router-view />
  </section>
  <footer>
    Created by <a href="https://github.com/unstoppablebyte">UnstoppableByte</a>
  </footer>
</template>
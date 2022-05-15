<script>
    import {link} from 'svelte-spa-router'
    import active from 'svelte-spa-router/active'

</script>

<header>
    Header!
    <!--  루트경로는 {'/'} 가 필요없음. active시에.  -->
    <a
            use:link
            use:active
            href="/">
        Home
    </a>

    <a
            use:link
            use:active={'/about'}
            href="/about">
        about
    </a>
</header>

<style lang="scss">
  header {
    a {
      &.active {
        color: red;
      }
    }
  }
  header :global(a.active) {
    color: red;
  }
</style>
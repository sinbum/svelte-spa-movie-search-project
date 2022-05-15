<script>
    import {link} from 'svelte-spa-router'

</script>

<a
        use:link
        href="/">
    <span>OMDBAPI</span>.COM
</a>


<style lang="scss">
    a{
      display: block;
      font-family: 'Oswald',sans-serif;
      font-size: 20px;
      color: rgba(#fff,.5);
      text-decoration: none; //글씨 밑줄 사용X
      span {
        color: #FDC000;
      }
    }
</style>
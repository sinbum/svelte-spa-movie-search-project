<script>
    import Router from "svelte-spa-router"
    import Header from "~/component/Header.svelte";
    import routes from '~/routes'
</script>

<Header/>

<Router {routes}/>



<style lang="scss"></style>
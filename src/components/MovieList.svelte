<script>
    import { movie, loading } from '~/store/movie'
    import MovieCard from "~/components/MovieCard.svelte";
    import Loader from "~/components/Loader.svelte";

</script>

<div class="movie-list">
    {#if $loading}
        <Loader/>
    {/if}
    <div class="movies">
        {#each $movie as movie (movie.imdbID)}
            <MovieCard {movie}/>
<!--            {movie.Title}-->
        {/each}
    </div>
</div>

<style lang="scss">
    .movie-list{
      margin-top: 30px;
      padding: 10px;
      background-color: $color--area;
      border-radius: 4px;
      text-align: center;

      .movies{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    }
</style>

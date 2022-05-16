<script>
    import { movies } from '~/store/movies'
    import MovieCard from "~/components/MovieCard.svelte";

</script>

<div class="movie-list">
    <div class="movies">
        {#each $movies as movie (movie.imdbID)}
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

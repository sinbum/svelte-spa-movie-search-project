<script>
    import { movies } from '~/store/movies'
</script>

<div class="movie-list">
    <div class="movies">
        {#each $movies as movie (movie.imdbID)}
            {movie.Title}
        {/each}
    </div>
</div>
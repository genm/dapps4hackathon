<template>
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{ card.title }}</p>
            <p class="subtitle is-6">{{ card.sub }}</p>
          </div>
        </div>

        <div class="content">
          {{ card.description }}
          <br>
          <time datetime="2016-1-1">{{ card.date }}</time>
        </div>
      </div>
    </div>
</template>

<script>

  export default {
    props: ['card'],
    components: {

    }
  }
</script>

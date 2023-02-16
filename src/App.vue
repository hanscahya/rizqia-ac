<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<!-- Google tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-E26HY48MGL">
</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-E26HY48MGL');
</script>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    color: #2c3e50;
  }
  /* Global Styling */
  .bs {
    border: 1px solid greenyellow;
  }
  .fs {
    height: 100vh;
    width: 100vw;
  }

  .cb {
    display: flex;
  }
  .cb.all {
    justify-content: center;
    align-items: center;
  }
  .cb.vertical {
    align-items: center
  }
  .cb.horizontal {
    justify-content: center;
  }
  .cb.between {
    justify-content: space-between;
  }
  .cb.around {
    justify-content: space-around;
  }
  .cb.row {
    flex-direction: row;
  }
  .cb.top {
    align-items: flex-start;
  }
  .cb.bottom {
    align-items: flex-end;
  }
  .cb.left {
    justify-content: flex-start;
  }
  .cb.right {
    justify-content: flex-end;
  }

  .bg-img-cover {
    width: 100%;
    height: 100%;

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .vid-container {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  .vid {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  .vid.height {
    height: 100%;
  }
  .vid.width {
    width: 100%;
  }

  .bb {
    font-size: 22px;
    font-weight: 400;
  }
  .title {
    font-size: 24px;
    font-weight: 600;
  }

  /* INFINITE SLIDE BAR BUG */
  .infinite-slider-fix {
    display: flex;
    justify-content: space-around;
  }
</style>

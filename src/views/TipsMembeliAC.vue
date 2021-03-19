<template>
  <b-container>
    <b-row>
      <b-col cols="4" class="d-none d-sm-block p-0">
        <Header />
      </b-col>

      <b-col class="py-5 text-justify" style="height:100vh; overflow-y: scroll;">
        <div class="title">
          Tips Membeli AC
        </div>

        <div>
          <span style="font-style:italic;">29 Juni 2020</span>
          &nbsp; | &nbsp;
          <span>Share</span>
        </div>

        <div class="mt-3">
           <b-img :src="require('@/assets/img/unsplash/leman.jpg')" fluid />
        </div>
        
        <p class="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nibh dolor, gravida et mauris vitae, dapibus tempor erat. Nunc sagittis elementum justo eu elementum. Praesent euismod luctus nulla, in lobortis eros pulvinar eu. Maecenas a aliquet nibh. Pellentesque nec mattis massa. Mauris vestibulum id est non scelerisque. Donec vestibulum pharetra massa, fringilla iaculis libero pulvinar id. Nullam non justo vel leo efficitur viverra ut at ipsum.
        </p>

        <p>
          Nunc eu neque lobortis, egestas libero a, venenatis orci. Mauris dolor eros, euismod nec mauris a, cursus ultricies ligula. Curabitur scelerisque, felis vitae sodales pharetra, orci eros rhoncus sem, vitae tempus massa mi et orci. Praesent a metus et nibh dignissim sollicitudin. Nunc sit amet vehicula nunc. Pellentesque blandit convallis facilisis. Proin id urna vehicula, vestibulum nisi eu, venenatis neque. In malesuada, mauris aliquam dignissim imperdiet, sapien odio commodo lacus, a porta libero neque tempor tellus. Praesent imperdiet leo eget arcu efficitur, in accumsan erat iaculis. Integer nec posuere nunc. Integer condimentum augue risus, ac facilisis dolor viverra quis. Fusce sed magna elit.
        </p>

        <blockquote class="mt-3" style="padding: 10px 20px; margin: 0 0 20px; font-size: 1.125rem; border-left: 5px solid #EEE; font-style: italic;">
          <p>Vestibulum id ligula porta felis euismod semper. Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.</p>
        </blockquote>

        <p>
          Duis eget hendrerit arcu. Nam in placerat nisl, nec gravida diam. Nullam sed consectetur neque, id mattis lacus. Praesent tempus nisi sit amet eros pulvinar consequat. Aliquam a tortor viverra, sagittis nisl et, rutrum tellus. Ut a pharetra nunc. Curabitur facilisis, lectus at dapibus mollis, nulla nulla aliquet ante, sed varius erat velit in lacus. Aenean blandit nec urna eu tempor. Morbi commodo erat eget augue tincidunt, in cursus lacus mollis. Etiam id justo eu risus luctus gravida.
        </p>

        <p>
          Cras quam metus, lacinia eu lectus et, pulvinar fringilla nunc. Praesent ut vestibulum diam, vel dignissim nunc. Nullam volutpat accumsan sem vitae dignissim. Nulla sed consectetur sem. Vestibulum non nisl nec nibh vulputate dapibus ut id erat. Ut finibus, ligula vel mollis egestas, neque eros scelerisque odio, et imperdiet tortor elit at dolor. Proin in tellus vel erat aliquet dapibus a vel purus. Vestibulum sit amet laoreet tortor. Donec varius viverra ultricies. Mauris iaculis lectus sed euismod sollicitudin.
        </p>

        <p>
          In sed enim in diam dictum consequat nec sed dui. Nunc mauris libero, eleifend in vulputate sit amet, commodo eget justo. Mauris malesuada tincidunt mi, ut dignissim mi pellentesque ut. Fusce eu aliquet quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non eros eu quam placerat semper. Integer quis elit et tellus porta venenatis nec eget velit.
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'TipsMembeliAC',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>

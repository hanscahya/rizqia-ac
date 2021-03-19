<template>
  <b-container>
    <b-row>
      <b-col cols="4" class="d-none d-sm-block p-0">
        <Header />
      </b-col>

      <b-col class="py-5 text-justify" style="height:100vh; overflow-y: scroll;">
        <div class="title">
          Apa yang terjadi jika tiba-tiba AC kita mati?????
        </div>

        <div>
          <span style="font-style:italic;">7 Juli 2020</span>
          &nbsp; | &nbsp;
          <span>Share</span>
        </div>

        <div class="mt-3">
           <b-img :src="require('@/assets/img/unsplash/leman.jpg')" fluid />
        </div>
        
        <p class="mt-3">
          Sungguh kenyamanan kita terganggu!!, hal semacam ini bisa mempengaruhi produktivitas kita, bekerja dengan suasana panas sangat tidak nyaman, apalagi jika AC tersebut diperuntukkan buat server, Labarotorium, atau yang lainnya. Maka sudah terbayangkan betapa pentingnya AC dalam kehidupan kita.
        </p>

        <p>
          AC sepertinya terlihat sepele, tetapi jika AC kita trouble ternyata dampaknya bisa lumayan besar. dari anak Bayi yang merengek nangis kepanasan hingga sebuah instansi bisa terganggu sistem ITnya karena server over heat karena ACnya bermasalah.
        </p>

        <p>
          Dengan serangkaian dampak yang tidak menyenangkan maka kondisi AC yang sehat dan terawat merupakan dambaan kita semua dan ternyata mampu menjaga investasi kita baik secara langsung maupun tidak langsung.
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'ACMatiTibaTiba',
  components: {
    Header
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

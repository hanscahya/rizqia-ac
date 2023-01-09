<template>
  <b-container>
    <b-row>
      <b-col cols="4" class="d-none d-sm-block p-0">
        <Header />
      </b-col>

      <b-col cols="12" class="d-block d-sm-none" style="border-bottom: 3px solid rgb(31, 119, 154);">
        <HeaderMobile />
      </b-col>

      <b-col style="height:100vh; overflow-y: scroll;">
        <!-- <b-row @click="openMaps('citra')">
          <b-col
            class="cb all bg-img-cover"
            style="height:30vh; cursor:pointer;"
            :style="{ 'background-image': `url(${require('@/assets/img/maps-citra.png')})` }"
          />
        </b-row>
        <b-row class="mt-2 text-left">
          <b-col cols="12" lg="6" class="bb text-left">
            <b>Service AC Citra Raya Cikupa</b>
          </b-col>
          <b-col cols="12" lg="6" class="d-none d-sm-block bb text-right">
            <b>Telp/WA <a href="https://api.whatsapp.com/send/?phone=6281385846234&text&type=phone_number&app_absent=0">+62-813-8584-6234</a></b>
          </b-col>
          <b-col cols="12" lg="6" class="bb d-block d-sm-none">
            <b>Telp/WA <a href="https://api.whatsapp.com/send/?phone=6281385846234&text&type=phone_number&app_absent=0">+62-813-8584-6234</a></b>
          </b-col>
        </b-row>        
        <b-row>
          <b-col class="px-3 text-left">
            PGMG+35R, Jl. Citra Raya Boulevard, Cikupa, Kab. Tangerang
          </b-col>
        </b-row>

        <b-row class="justify-content-center">
          <b-col cols="10" class="my-3 border-bottom" />
        </b-row> -->

        <b-row @click="openMaps('jogja')">
          <b-col
            class="cb all bg-img-cover"
            style="height:70vh; cursor:pointer;"
            :style="{ 'background-image': `url(${require('@/assets/img/maps-jogja.png')})` }"
          />
        </b-row>
        <b-row class="mt-2 text-left">
          <b-col cols="12" lg="6" class="bb text-left">
            <b>Service AC Yogyakarta</b>
          </b-col>
          <b-col cols="12" lg="6" class="d-none d-sm-block bb text-right">
            <b>Telp/WA <a href="https://api.whatsapp.com/send/?phone=6287864840007&text&type=phone_number&app_absent=0">+62-878-6484-0007</a></b>
          </b-col>
          <b-col cols="12" lg="6" class="bb d-block d-sm-none">
            <b>Telp/WA <a href="https://api.whatsapp.com/send/?phone=6287864840007&text&type=phone_number&app_absent=0">+62-878-6484-0007</a></b>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="px-3 text-left">
            Perumahan Pal Gading Regency, Blok E no. 15, Wonosari, Yogyakarta
          </b-col>
        </b-row>

        <b-row class="justify-content-center">
          <b-col cols="10" class="my-3 border-bottom" />
        </b-row>

        <b-row class="text-justify">
          <b-col class="p-3 cb all">
            <div>
              <div class="mt-2">
                <div class="bb">Jenis AC yang kami kuasai</div>
                <div>Instalasi, perawatan, perbaikan & pengadaan</div>
              </div>
              <b-row class="mt-2 text-center justify-content-center">
                <b-col cols="10" lg="4" class="p-2">
                  <b-card>AC Split wall mounted</b-card>
                </b-col>
                <b-col cols="10" lg="4" class="p-2">
                  <b-card>AC Split multi</b-card>
                </b-col>
                <b-col cols="10" lg="4" class="p-2">
                  <b-card>AC Split duct</b-card>
                </b-col>
                <b-col cols="10" lg="4" class="p-2">
                  <b-card>AC Cassette</b-card>
                </b-col>
                <b-col cols="10" lg="4" class="p-2">
                  <b-card>AC floor standing</b-card>
                </b-col>
              </b-row>

              <div class="mt-5">Pengadaan AC, Bongkar pasang AC, Isi Freon, Perawatan AC, dan Perbaikan AC.</div>
              <div class="mt-3">
                <b>Rizqia AC</b> mempersembahkan pelayanan service AC profesional dengan harga terjangkau, Kami berkomitmen melayani dengan tulus dan mempersembahkan hasil terbaik yang maksimal. Dikerjakan oleh teknisi berpengalaman, dan bersertifikasi kompeten.
              </div>
              <div class="mt-3">
                <b>Rizqia AC</b> bergerak dalam layanan jasa bongkar pasang AC, Perawatan/cuci AC, Perbaikan AC, isi freon, pengadaan AC baru dan bekas berkualitas, serta melayani tukar tambah AC lama anda dengan AC baru dengan harga yang bersaing.
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row class="mt-3 text-left">
          <b-col cols="12">
            <span class="bb">Layanan Kami</span>
          </b-col>
          <b-col class="text-justify">
            <ol>
              <li>Menyediakan AC baru berbagai merk dan bekas seperti; Daikin, SHARP, Thosiba, LG, Panasonic, GREE, AUX, dll.<br>Tersedia bervarian model,type dan ukuran (pk).</li>
              <li>Beli AC di Rizqia dipastikan tidak salah ukuran kapasitas AC untuk ruangannya, karena kami bersedia untuk survei lokasi dahulu untuk menentukan kapasitas kebutuhan AC ruangan bapak/ibu.</li>
              <li>Pemasangan AC oleh teknisi yang berpengalaman dengan hasil rapi, dan memuaskan.Dalam pemasangan team teknisi kami mempunyai standart SOP tersendiri yang tidak dimiliki oleh teknisi penyedia jasa klasikal, yang banyak dikeluhan dari konsumen karena dalam pemasangan terjadi kebocoran freon, pemasangan yang tidak rapi, ruangan kotor, dan kendala lainnya.<br>Pemasangan AC oleh team kami disamping mengutamakan hasil yang maksimal juga mengindahkan estetika ruangan serta pertimbangan dalam perawatan AC itu sendiri. Karena jika pemasangan tidak dipertimbangkan dengan perawatan maka bisa menimbulkan hal2 yang tidak diharapkan. seperti saat perwatan lokasi unit ac tersebut susah dijangkau sehingga dalam pencucian tidak bisa maksimal atau bahkan malah saat pencucian AC ruangan/tembok jadi kotor semua.</li>
              <li>
                Perawatan/Cuci AC secara rutin.<br>Perawatan AC berkala 3bulanan secara rutin akan sangat berpengaruh terhadap kondisi AC, perawatan yang rutin akan memperoleh banyak manfaat. diantaranya;
                <ol type="a">
                  <li>
                    <b>Kesehatan</b><br>
                    Dengan kondisi AC yang bersih udara didalam ruangan akan lebih terjaga kesehatannya, lebih segar, fresh, ruangan lebih dingin, bebas debu, bebas dari jamur jahat yang bisa mengakibatkan flue dan alergi lainnya bagi pemakainya.
                  </li>
                  <li>
                    <b>AC lebih awet</b><br>
                    Dengan kondisi AC yang bersih maka sistem kerja AC bisa lebih maksimal, pendinginan ruangan lebih cepat, suhu dingin lebih cepat tercapai sehingga kerja kompresor lebih ringan, suara lebih halus.<br>
                    Dengan kondisi evaporator AC yang bersih tidak mudah tumbuh lumut, jauh dari korosi pada bagian tertentu AC yang bisa mengakibatkan kebocoran freon pada unit indoor.<br>
                    Bagian outdoor yang bersih akan meringankan kerja kompresor, mengurangi getaran pada unit outdoor yang biasa mengakibatkan gesekan dan berakibat kebocoran pada pipa2 kapiler maupun pada bagian kondensor.<br>
                    Kondisi AC yang bersih mengurangi polusi suara yang ditimbulkan dari unit ac, karena jika unit ac kotor maka akan menimbulkan suara getaran yang cukup mengganggu pendengaran kita, apalagi jika unit outdoor dipasang tepat didinding kamar kita.
                  </li>
                  <li>
                    <b>Listrik lebih hemat</b><br>
                    Adanya kondisi unit AC yang bersih dan sehat proses pendinginan jauh lebih cepat kerja kompresor lebih ringan, lebih singkat. Ampere AC pun sudah otomatis turun lebih kecil.<br>
                    Tempo pendinginan yang lebih cepat dan ampere AC yang lebih kecil sudah barang tentu konsumsi listrik juga relatif lebih sedikit bisa menekan tagihan listrik yang membengkak akibat pemakaian AC.
                  </li>
                  <li>
                    <b>AC lebih terkontrol</b><br>
                    Adanya perawatan yang rutin kondisi ac lebih terkontrol, teknisi kami setiap kali bisa mengontrol kondisi ac bapakk/ibu, dipakai lebih savety, meminimalisir AC bocor air atau netes dengan tiba2. kondisi fisik ac juga lebih fresh.
                  </li>
                </ol>
              </li>
              <li>
                <b>Perbaikan</b><br>
                <b>Rizqia AC</b> telah berpengalaman sejak 2007 dan menguasai dibidangnya dalam segala seluk beluk permasalahan AC, teknisi kami terseleksi dan jujur.
                <ol type="a">
                  <li>Setiap penggantian part dipastikan berkualitas dalam kondisi baru</li>
                  <li>Setiap perbaikan dan penggantian part bergaransi 3 bulan</li>
                  <li>Pelayanan cepat dan tepat</li>
                </ol>
              </li>
            </ol>
          </b-col>
        </b-row>

        <b-row class="my-4">
          <b-col cols="12">
            <span class="bb">Kumpulan Kegiatan Kami</span>
          </b-col>
          <b-col class="cb all">
            <div>
              <img class="image slideshow" v-for="(image, i) in images" :src="image" :key="i" @click="index = i">
              <vue-gallery-slideshow :images="images" :index="index" @close="index = null" />
            </div>
          </b-col>
        </b-row>

        <b-row class="my-3">
          <b-col>
            <div>
              <div class="bb text-center">
                Melayani secara profesional dan sepenuh hati
              </div>
              <!-- <div class="text-justify" style="font-style:italic; font-size:14px;">
                Service AC Citra Raya telp/wa 081385846234 | Service AC di Cikupa telp/wa 081385846234 |<br />
                Service AC Suvarna Sutra telp/wa 081385846234 | Service AC Suvarna Padi telp/wa 081385846234 |<br />
                Service AC Panongan telp/wa 081385846234 | Service AC Curug 081385846234 |<br />
                Service AC Gading Serpong telp/wa 081385846234 | Service AC Cisauk 081385846234 |<br />
                Service AC BSD 081385846234 | Service AC Legok 081385846234
              </div> -->
            </div>
            <div>
              <div class="bb text-center">
                Kini kami hadir di Yogyakarta!
              </div>
              <div class="mt-2 text-justify" style="font-style:italic; font-size:14px;">
                Service AC Bantul 087864840007 | Service AC Sleman 087864840007 |<br />
                Service AC Yogyakarta 087864840007 | Service AC Kota Gede 087864840007 |<br />
                Service AC Yogya 087864840007 | Service AC Gunung Kidul 087864840007 |<br />
                Service AC Wonosari 087864840007 | Service AC Bangun tapan 087864840007 |<br />
                Service AC Gedong Kuning 087864840007 | Service AC Kulonprogo 087864840007
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row class="my-4">
          <b-col cols="12">
            <span class="bb">Sertifikasi Kami</span>
          </b-col>
          <b-col class="cb all">
            <div>
              <img class="image slideshow" v-for="(image, i) in certifications" :src="image" :key="i" @click="index = i">
              <vue-gallery-slideshow :images="certifications" :index="index" @close="index = null" />
            </div>
          </b-col>
        </b-row>

        <b-row class="my-4">
          <b-col cols="12">
            <span class="bb">Kumpulan Video Kegiatan Kami</span>
          </b-col>
        </b-row>
        <b-row class="my-4 justify-content-center">
          <b-col v-for="(video, i) in videos" :key="i" cols="10" lg="6" style="height:60vh; padding:15px;">
            <div class="vid-container shadow">
              <video controls class="vid height">
                <source :src="require(`@/assets/video/${video}`)" type="video/mp4">
              </video>
            </div>
          </b-col>
        </b-row>

        <b-row class="text-justify">
          <b-col cols="12">
            <span class="bb">Perawatan/cuci AC secara rutin, diantaranya:</span>
          </b-col>
          <b-col>
            <ol>
              <li>Kesehatan. Dengan kondisi AC yang bersih udara didalam ruangan akan lebih terjaga kesehatannya, lebih segar, fresh, ruangan lebih dingin, bebas debu, bebas dari jamur jahat yang bisa mengakibatkan flue dan alergi lainnya bagi pemakainya</li>
              <li>AC lebih awet. Dengan kondisi AC yang bersih maka sistem kerja AC bisa lebih maksimal, pendinginan ruangan lebih cepat, suhu dingin lebih cepat tercapai sehingga kerja kompresor lebih ringan, suara lebih halus. Dengan kondisi evaporator AC yang bersih tidak mudah tumbuh lumut, jauh dari korosi pada bagian tertentu AC yang bisa mengakibatkan kebocoran freon pada unit indoor. Bagian outdoor yang bersih akan meringankan kerja kompresor, mengurangi getaran pada unit outdoor yang biasa mengakibatkan gesekan dan berakibat kebocoran pada pipa2 kapiler maupun pada bagian kondensor. Kondisi AC yang bersih mengurangi polusi suara yang ditimbulkan dari unit ac, karena jika unit ac kotor maka akan menimbulkan suara getaran yang cukup mengganggu pendengaran kita, apalagi jika unit outdoor dipasang tepat didinding kamar kita.</li>
              <li>Listrik lebih hemat. Adanya kondisi unit AC yang bersih dan sehat proses pendinginan jauh lebih cepat kerja kompresor lebih ringan, lebih singkat. Ampere AC pun sudah otomatis turun lebih kecil. Tempo pendinginan yang lebih cepat dan ampere AC yang lebih kecil sudah barang tentu konsumsi listrik juga relatif lebih sedikit bisa menekan tagihan listrik yang membengkak akibat pemakaian AC.</li>
              <li>AC lebih terkontrol. Adanya perawatan yang rutin kondisi ac lebih terkontrol, teknisi kami setiap kali bisa mengontrol kondisi ac bapakk/ibu, dipakai lebih savety, meminimalisir AC bocor air atau netes dengan tiba2. kondisi fisik ac juga lebih fresh.</li>
            </ol>
          </b-col>
        </b-row>

        <b-row class="text-justify">
          <b-col cols="12">
            <span class="bb">Perbaikan AC, termasuk:</span>
          </b-col>

          <b-col>
            <ol>
              <li>Setiap penggantian part dipastikan berkualitas dalam kondisi baru.</li>
              <li>Setiap perbaikan dan penggantian part bergaransi 3 bulan.</li>
              <li>Pelayanan cepat, dan tepat.</li>
            </ol>
          </b-col>
        </b-row>

        <b-row class="py-3">
          <b-col cols="12">
            <span class="bb">Artikel</span>
          </b-col>

          <b-col cols="12" lg="4" class="cb all" style="min-height:20rem;">
            <div class="pb-3" style="border-radius:5px; border: 1px solid #dddddd;">
              <div class="img-cover">
                <b-img :src="require('@/assets/img/unsplash/leman.jpg')" fluid style="border-top-right-radius: 5px; border-top-left-radius: 5px;" />
              </div>
              <div class="my-3" style="font-weight: 500;">
                AC anda tiba-tiba mati?
              </div>
              <b-button @click="openLink('ac-mati-tiba-tiba')" variant="success" size="sm">Read More</b-button>
            </div>
          </b-col>
          <b-col cols="12" lg="4" class="cb all" style="min-height:20rem;">
            <div class="pb-3" style="border-radius:5px; border: 1px solid #dddddd;">
              <div class="img-cover">
                <b-img :src="require('@/assets/img/unsplash/vladislav-nikonov.jpg')" fluid style="border-top-right-radius: 5px; border-top-left-radius: 5px;" />
              </div>
              <div class="my-3" style="font-weight: 500;">
                Tips Membeli AC
              </div>
              <b-button @click="openLink('tips-membeli-ac')" variant="success" size="sm">Read More</b-button>
            </div>
          </b-col>
          <b-col cols="12" lg="4" class="cb all" style="min-height:20rem;">
            <div class="pb-3" style="border-radius:5px; border: 1px solid #dddddd;">
              <div class="img-cover">
                <b-img :src="require('@/assets/img/unsplash/zulki-jrzt.jpg')" fluid style="border-top-right-radius: 5px; border-top-left-radius: 5px;" />
              </div>
              <div class="my-3" style="font-weight: 500;">
                Tips Merawat AC
              </div>
              <b-button @click="openLink('tips-merawat-ac')" variant="success" size="sm">Read More</b-button>
            </div>
          </b-col>
        </b-row>

        <b-row class="my-3">
          <b-col cols="12">
            <span class="bb">Testimoni</span>
          </b-col>

          <b-col class="mt-3 cb all">
            <infinite-slide-bar duration="16s">
              <div class="infinite-slider-fix">
                <div v-for="(testimonial, index) in testimonials" :key="index">
                  <div class="infinite-img">
                    <b-img
                      :src="require(`@/assets/img/testimonial/${testimonial}`)"
                      style="max-height:60vh; width:auto; margin-right: 10px;"
                    />
                  </div>
                </div>
              </div>
            </infinite-slide-bar>
          </b-col>
        </b-row>

        <b-row class="my-3">
          <b-col class="text-center py-3" style="font-weight:500;">
            <span style="color:red;">Jika mengoprasikan AC 16°C pada remot bukan berarti dingin yang dikeluarkan dari AC tersebut 16° C, Ingat itu!!!!</span>
            <br>
            Mau tau jawabannya ????
            <br>
            Hubungi kami Rizqia AC di 0813 8584 6234
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import VueGallerySlideshow from 'vue-gallery-slideshow';
import InfiniteSlideBar from 'vue-infinite-slide-bar'

import Header from '@/components/Header'
import HeaderMobile from '@/components/HeaderMobile'

export default {
  name: 'Home',
  components: {
    InfiniteSlideBar,
    VueGallerySlideshow,

    Header,
    HeaderMobile
  },
  data () {
    return {
      certifications: [
        require('@/assets/img/certificate/rizqia-ac-gree-authorized-dealer.jpg'),
        require('@/assets/img/certificate/rizqia-ac-panasonic-certificate.jpg'),
        require('@/assets/img/certificate/rizqia-ac-sertifikat-kompetensi.jpg'),
      ],

      images: [
        require('@/assets/img/kegiatan/service-ac-jogjakarta-1.jpg'),
        require('@/assets/img/kegiatan/service-ac-jogjakarta-2.jpg'),
        require('@/assets/img/kegiatan/service-ac-jogjakarta-3.jpg'),
        require('@/assets/img/kegiatan/service-ac-jogjakarta-5.jpg'),
        require('@/assets/img/kegiatan/service-ac-jogjakarta-6.jpg'),
        require('@/assets/img/kegiatan/service-ac-jogjakarta-7.jpg'),
        require('@/assets/img/kegiatan/service-ac-jogjakarta-8.jpg'),
        require('@/assets/img/kegiatan/service-ac-jogjakarta-9.jpg'),
        require('@/assets/img/kegiatan/service-ac-jogjakarta-10.jpg'),
        require('@/assets/img/kegiatan/service-ac-jogjakarta-11.jpg'),
        require('@/assets/img/kegiatan/service-ac-citra-raya-1.jpeg'),
        require('@/assets/img/kegiatan/service-ac-citra-raya-2.jpeg'),
        require('@/assets/img/kegiatan/service-ac-citra-raya-3.jpeg'),
        require('@/assets/img/kegiatan/service-ac-citra-raya-5.jpeg'),
        require('@/assets/img/kegiatan/service-ac-citra-raya-6.jpeg'),
        require('@/assets/img/kegiatan/service-ac-citra-raya-8.jpeg'),
        require('@/assets/img/kegiatan/service-ac-citra-raya-9.jpeg'),
        require('@/assets/img/kegiatan/service-ac-citra-raya-11.jpeg'),
        require('@/assets/img/kegiatan/service-ac-citra-raya-12.jpeg'),
        require('@/assets/img/kegiatan/service-ac-citra-raya-13.jpeg'),
        require('@/assets/img/kegiatan/service-ac-citra-raya-14.jpeg'),
        require('@/assets/img/kegiatan/service-ac-citra-raya-15.jpeg'),
        require('@/assets/img/kegiatan/service-ac-citra-raya-18.jpeg'),
        require('@/assets/img/kegiatan/service-ac-citra-raya-16.jpeg'),
        require('@/assets/img/kegiatan/service-ac-citra-raya-7.jpeg'),
        require('@/assets/img/kegiatan/service-ac-citra-raya-4.jpeg'),
        require('@/assets/img/kegiatan/service-ac-citra-raya-19.jpeg'),
        require('@/assets/img/kegiatan/service-ac-citra-raya-17.jpeg')  
      ],
      index: null,

      videos: [
        'service-ac-citra-raya-1.mp4',
        'service-ac-citra-raya-2.mp4',
        'service-ac-citra-raya-3.mp4',
        'service-ac-citra-raya-4.mp4',
        'service-ac-citra-raya-5.mp4',
        'service-ac-citra-raya-6.mp4'
      ],

      testimonials: [
        '1.jpeg',
        '2.jpeg',
        '3.jpeg',
        '4.jpeg',
        '5.jpeg'
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  div.row.ct {
    height: 400px;
  }

  .slideshow {
    max-width: 50%;
    height: auto;
    padding: 5px;
  }

  .clickable {
    cursor: pointer;
  }
  .clickable:hover {
    text-decoration: underline;
  }

  .shadow {
    box-shadow: 10px 5px 5px 5px black;
  }

  /* Image cover */
  .img-cover {
    width: 100%;
  }
  .img-cover>img {
    object-fit: cover;
    height: 10rem;
    width: 100%;
  }
</style>

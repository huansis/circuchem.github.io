<template>
  <main class=" font-sans overflow-hidden">

    <!-- 1. Hero Section: 品牌宣言 -->
    <section class="relative pt-32 md:pt-60 pb-20 px-6">
    
      <div class="flex flex-col items-center text-center mb-[80px]">
        <div v-scroll-reveal="{ delay: 0.1 }"
          class="px-5 py-1.5 rounded-full border border-[#00378a]/60 bg-white text-[11px]  text-[#00378a] mb-6 uppercase tracking-[0.2em] shadow-sm">
           {{ siteConfig?.about?.tag || 'WHO WE ARE' }}
        </div>
        <h1 v-scroll-reveal="{ delay: 0.2 }"
          class="text-[40px] md:text-[60px] font-light leading-[1.1] tracking-tight mb-6 text-[#001f4e]">
        {{ siteConfig?.about?.titleOne || 'We link high-quality copper chemicals with worldwide buyers. ' }} <span class="text-blue-500">{{ siteConfig?.about?.titleTwo || 'vision' }}</span> {{ siteConfig?.about?.titleThree || 'and reality.' }}
        </h1>
        <p v-scroll-reveal="{ delay: 0.3 }"
          class="text-[#001f4e]/90  text-lg max-w-2xl font-extralight leading-relaxed">
           {{ siteConfig?.about?.description || 'CIRCUCHEM' }}
        </p>
      </div>
    </section>

    <!-- 2滚动拖动图片 -->
      <ImageScrollWall :images="myImages" :speed="100" />
    <!-- 2. Stats Section: 数据证明 -->
   <StatPillsSection :data="siteConfig?.about?.stats" />
   <!-- <TeamSection :data="siteConfig?.about?.team" /> -->
  



  </main>
</template>

<script setup lang="ts">
const siteConfig = useAppConfig()
import { 
  Users, 
  Clock, 
  DollarSign, 
  Database, 
  TrendingUp,
  Zap,
  Target,
  ShieldCheck,
  Cpu,
  ArrowRight,
  Globe,
  Sparkles,
  ChevronLeft, ChevronRight
} from 'lucide-vue-next'

const myImages = [
  '/img/ISO9001.jpg',
  '/img/ISO14001.jpg',
  '/img/ISO45001.jpg',
  '/img/01.jpg',
  '/img/02.png',
  '/img/03.jpg',
  '/img/04.jpg',
  '/img/05.jpg',
  '/img/06.jpg',
  '/img/07.jpg',
  '/img/08.jpg',
  '/img/09.jpg',
  '/img/10.jpg',  
  '/img/11.jpg',
  '/img/12.jpg',
  '/img/13.jpg',
  '/img/14.jpg',  
  '/img/15.jpg',
  '/img/16.jpg',
]


const currentImgIndex = ref(0)

const nextImg = () => {
  currentImgIndex.value = (currentImgIndex.value + 1) % siteConfig?.about?.gallery.length
}

const prevImg = () => {
  currentImgIndex.value = (currentImgIndex.value - 1 + siteConfig?.about?.gallery.length) % siteConfig?.about?.gallery.length
}

const iconMap = {
  Zap,
  Users,
  Clock,
  DollarSign,
  Database,
  TrendingUp,
  Target,
  ShieldCheck,
  Cpu,
  ArrowRight,
  Globe,
  Sparkles,
  ChevronLeft, ChevronRight
}


const values = [
  {
    icon: 'Target',
    title: 'Precision First',
    desc: 'We don\'t believe in "close enough." Every detail is intentional, every pixel is deliberate.'
  },
  {
    icon: 'Sparkles',
    title: 'Innovation Driven',
    desc: 'Constantly exploring the frontier of technology to bring you tomorrow\'s solutions today.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Unwavering Quality',
    desc: 'Reliability is our foundation. We build robust systems that stand the test of time and scale.'
  }
]
useSeoMeta({
  title: () => siteConfig?.seo?.about.title || 'Default Title',
  description: () => siteConfig?.seo?.about.description || 'Default description',
  ogTitle: () => siteConfig?.seo?.about.title || 'Default Title',
  ogDescription: () => siteConfig?.seo?.about.description || 'Default description',
  ogImage: () => siteConfig?.seo?.about.ogImage || '/default-og.jpg',
  twitterCard: () => siteConfig?.seo?.about.twitterCard || 'summary_large_image',
})
</script>

<style scoped>
/* 标题文字平衡 */
h1,
h2 {
  text-wrap: balance;
}

/* 文字渐变效果 */
.text-italic {
  font-style: italic;
  font-family: serif;
  /* 增加一点衬线体斜体，更有设计感 */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

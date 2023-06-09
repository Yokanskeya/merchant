<template>

  <!-- WebGL Background -->
  <client-only>
    <LazyHero/>
  </client-only>

  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>

  <!-- Dynamic Cursor Element -->
  <client-only>
    <LazyCursor/>
  </client-only>


</template>

<script setup>
import {useHead} from "nuxt/app";

useHead({
  title: 'Adam Khairusydan | Creative Front End Engineer',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  lang: 'en-US',
  charset: 'utf-8',
  htmlAttrs: {
    lang: 'en-US',
  },
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Hey I’m Adam, a creative front end engineer based in Jakarta, Indonesia. I\'m passionate about creating incredible user experiences with web technology. I specialize in programming with Vue, Nuxt and Electron although I have an extensive full-stack development background. I love writing code but I\'m also experienced in UX consulting, with a keen eye for detail and an understanding of interaction design and best practices. I’ve worked on many projects where I start early in the discovery process, guide and design the UX from the ground up, and then get to work building it.'
    },
    {
      hid: 'theme-color',
      name: 'theme-color',
      content: '#7a4fee'
    },
    {
      hid: 'robots',
      name: 'robots',
      content: 'index, follow'
    },
    {
      hid: 'googlebot',
      name: 'googlebot',
      content: 'index, follow'
    },
    {
      hid: 'og:title',
      name: 'og:title',
      content: 'Adam Khairusydan | Creative Front End Engineer'
    },
    {
      hid: 'og:type',
      name: 'og:type',
      content: 'website'
    },
    {
      hid: 'og:image',
      name: 'og:image',
      content: 'https://cdn.discordapp.com/attachments/1028699199304372264/1089217030244282438/cover.jpg'
    },
    {
      hid: 'og:image:alt',
      name: 'og:image:alt',
      content: 'Adam Khairusydan | Creative Front End Engineer'
    },
    {
      hid: 'og:description',
      name: 'og:description',
      content: 'Hey I’m Adam, a creative front end engineer based in Jakarta, Indonesia. I\'m passionate about creating incredible user experiences with web technology. I specialize in programming with Vue, Nuxt and Electron although I have an extensive full-stack development background. I love writing code but I\'m also experienced in UX consulting, with a keen eye for detail and an understanding of interaction design and best practices. I’ve worked on many projects where I start early in the discovery process, guide and design the UX from the ground up, and then get to work building it.'
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Adam Khairusydan | Creative Front End Engineer'
    },
    {
      hid: 'og:locale',
      name: 'og:locale',
      content: 'en_US'
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      hid: 'twitter:site',
      name: 'twitter:site',
      content: '@Yokanskeya'
    },
    {
      hid: 'twitter:creator',
      name: 'twitter:creator',
      content: '@Yokanskeya'
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: 'https://Yokans.dev'
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Adam Khairusydan | Creative Front End Engineer'
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: 'Hey I’m Adam, a creative front end engineer based in Jakarta, Indonesia.'
    },
    {
      hid: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: 'Adam Khairusydan | Creative Front End Engineer'
    }
  ],
  link: [
    {rel: 'icon', type: 'image/svg', href: '/icon-notext.svg'},
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap'
    },
    {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'},
  ],
  script: [
    {
      src: "https://kit.fontawesome.com/172ddc2486.js", async: true, defer: true
    }
  ],
});
</script>

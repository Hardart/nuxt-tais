<script setup lang="ts">
const params = useRoute().params
const newsImg = '/images/blog/blog-post-1111-1.jpg'
</script>

<template>
  <DelayHydration>
    <article class="relative py-5 md:py-20 overflow-hidden">
      <ImagesDecorateShape image="blog-shape" class="w-[200px] lg:w-[400px] -z-10 max-xl:blur-sm max-xl:-left-1" />
      <div class="container max-md:px-2 max-w-5xl mx-auto mt-5">
        <CardsDescription
          class="text-center max-w-2xl mx-auto"
          section-title="MAY 17, 2021"
          title="When Children Start Losing Teeth"
          size="h2"
        />
        <div class="mt-10 md:mt-20">
          <div class="w-full transition-opacity duration-500">
            <img
              :src="`/images/blog/blog-post-${params.slug}-big.webp`"
              width="1200"
              height="700"
              :alt="(params.slug as string)"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div class="relative -z-10">
        <ImagesDecorateShape image="blue-circle" class="right-2 z-10" />
        <ImagesDecorateShape image="pink-circle" class="top-80 right-64" />
      </div>
      <div class="max-w-[750px] px-4 sm:px-10 box-content mx-auto py-16 space-y-6">
        <h2 class="text-3xl">What is tartar and how does it form?</h2>
        <p class="text-neutral-600 text-lg font-light">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor. Invidunt ut labore et dolore magna
          aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
          et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <p class="text-neutral-600 text-lg font-light">
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla
          facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te
          feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
          laoreet dolore magna aliqua.
        </p>
        <h2 class="text-3xl !mt-10">What treatment options are there?</h2>
        <p class="text-neutral-600 text-lg font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          <img class="!my-12" :src="newsImg" width="750" height="440" alt="" />
        </p>
        <p class="text-neutral-600 text-lg font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
        <h2 class="text-3xl !mt-10">What is tartar and how does it form?</h2>
        <p class="text-neutral-600 text-lg font-light">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor. Invidunt ut labore et dolore magna
          aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
          et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <p class="text-neutral-600 text-lg font-light">
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla
          facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te
          feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
          laoreet dolore magna aliqua.
        </p>
      </div>
      <div class="relative -z-10 max-xl:blur-sm">
        <ImagesDecorateShape image="author-l" class="bottom-[700px]" />
        <ImagesDecorateShape image="author-r" class="right-0 bottom-0 max-2xl:w-[280px]" />
      </div>
    </article>
  </DelayHydration>
</template>

<style></style>

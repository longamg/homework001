<template>
    <container>
        <sprite :texture="mapImg"></sprite>
        <graphics :x="mapX" :y="-mapY"></graphics>
    </container>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { game } from '../game'
import mapImg from '../assets/map.jpg'

const viewWidth = 750
const viewHeight = 1080
const ballRadius = 50
const mapX = ref(0)
const mapY = ref(0)
// 方向
const distinctX = ref('right')
const distinctY = ref('top')
// 滚动速度
const speed = 5
function handleTicker() {
    moveX()
    moveY()
}

function moveX() {
    if (distinctX.value === 'right') {
        mapX.value += speed
    } else if (distinctX.value === 'left') {
        mapX.value -= speed
    }
    if (mapX.value > viewWidth - ballRadius * 2) {
        distinctX.value = 'left'
    }
    if (mapX.value < 0) {
        distinctX.value = 'right'
    }
}

function moveY() {
    if (distinctY.value === 'top') {
        mapY.value += speed
    } else if (distinctY.value === 'bottom') {
        mapY.value -= speed
    }
    if (mapY.value > viewHeight - ballRadius * 2) {
        distinctY.value = 'bottom'
    }
    if (mapY.value < 0) {
        distinctY.value = 'top'
    }
}

onMounted(() => {
    game.ticker.add(handleTicker)
})
onUnmounted(() => {
    game.ticker.remove(handleTicker)
})
export { mapImg, mapX, mapY }
</script>

<style scoped></style>

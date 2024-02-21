<template>
    <div class="stats">
        <div>
            <svg width="250" height="250" viewBox="0 0 250 250" class="circular-progress">
                <circle class="bg"></circle>
                <circle class="fg"></circle>
            </svg>
            <span>{{ percentage }}%</span>
        </div>
        <h5>{{ stat }}</h5>
    </div>
</template>

<script>
    export default {
        name: "StatsShowcase",
        props:{
            percentage: Number,
            stat: String
        }
    }
</script>

<style lang="scss" scoped>

@use '../styles/partials/mixin.scss' as *;
@use '../styles/partials/variables.scss' as *;

.stats{
    
    @include shifted-card;
    box-shadow: -2px 10px 10px 0px rgba(128, 128, 128, 0.1), 2px 0px 10px 0px rgba(128, 128, 128, 0.1), 0px 8px 0px 0px $green inset;
    width: calc(100%/3 - 20px);
    padding: 40px;
    &>div{
        position: relative;
        padding: 50px;
        display: flex;
        justify-content: center;
        
        span{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            font-size: 50px;
            color: $gray;
        }
    }
    h5{
      color: $gray;
      text-transform: uppercase;
    }
}


.circular-progress {
  --size: 250px;
  --half-size: calc(var(--size) / 2);
  --stroke-width: 10px;
  --radius: calc((var(--size) - var(--stroke-width)) / 2);
  --circumference: calc(var(--radius) * pi * 2);
  --dash: calc((var(--progress) * var(--circumference)) / 100);
  animation: progress-animation 1s linear 0s 1 forwards;
}

.circular-progress circle{
  cx: var(--half-size);
  cy: var(--half-size);
  r: var(--radius);
  stroke-width: var(--stroke-width);
  fill: none;
  stroke-linecap: round;
}

.circular-progress circle.bg{
  stroke: $light-gray;
}

.circular-progress circle.fg {
  transform: rotate(-90deg);
  transform-origin: var(--half-size) var(--half-size);
  stroke-dasharray: var(--dash) calc(var(--circumference) - var(--dash));
  transition: stroke-dasharray 1ms linear 1ms;
  stroke: $green;
}

@property --progress {
  syntax: "<number>";
  inherits: false;
  initial-value: 0;
}
@keyframes progress-animation {
  from {
    --progress: 0;
  }
  to {
    --progress: v-bind(percentage);
  }
}

</style>
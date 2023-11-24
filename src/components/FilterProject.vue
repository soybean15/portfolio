<template>
  
  <div>
    <ul class="flex">
        <li v-for="item in options" >
            <button @click="onClick(item)" :class="item === active ?'btn-accent':'btn-ghost'" class="btn btn-sm ">  {{item}}</button>
          
        </li>
    </ul>
   


  </div>
</template>

<script>
import { ref } from 'vue'

export default {
    props:['options'],
    emits:['onClick'],
    setup(props,{emit}){
        const active = ref('All')
        return {
            active,
            onClick:(item)=>{
                active.value=item
                emit('onClick',item)
            }
        }
    }
}
</script>

<style>

</style>
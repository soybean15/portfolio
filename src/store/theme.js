import { defineStore } from "pinia";
import { ref } from "vue";


export const useThemeStore = defineStore('theme', () => {

    const activeTheme = ref(localStorage.getItem('theme') ?? 'light')
    const isDark = ref(localStorage.getItem('dark_theme') ?? false)
    const darkTheme = [
        'dark',
        'synthwave',
        'halloween',
        'forest',
        'aqua',
        'black',
        'luxury',
        'dracula',
        'business',
        'night',
        'coffee',
        'dim',
        'sunset'
    ]

    

    const changeTheme = (theme) => {
        activeTheme.value = theme
        localStorage.setItem('theme', theme)

        if(darkTheme.includes(theme)){
         
            localStorage.setItem('dark_theme', true)
            isDark.value = localStorage.getItem('dark_theme') 

        }else{
           
            localStorage.setItem('dark_theme', false)
            isDark.value = localStorage.getItem('dark_theme') 
        }
    }


    return {
        activeTheme,
        changeTheme,
        isDark
    }


})
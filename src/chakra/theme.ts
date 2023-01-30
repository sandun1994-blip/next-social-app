import {  extendBaseTheme } from '@chakra-ui/react'

import '@fontsource/open-sans/700.css'
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import chakraTheme from '@chakra-ui/theme'
import { Button } from './button'



export const theme = extendBaseTheme({

    
    colors:{
        100:'#FF3c00'
    },
    fonts:{
        body:"Open Sans,sans-serif"
    },
    styles:{
        global:()=>({
            body:{
                bg:"gray.200"
            }
        })
    },
    components:{
        Button
    }
  
})
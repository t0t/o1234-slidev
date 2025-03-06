import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
   return {
     theme: 'base',
     themeVariables: {
      // Variables generales del tema
      'primaryColor': '#BB2528',
      'primaryTextColor': '#fff',
      'primaryBorderColor': '#000',
      'lineColor': 'white',
      'secondaryColor': '#006100',
      'tertiaryColor': '#fff',
      'fontSize': '13px',
      'noteBkgColor': '#fff',
      'noteTextColor': '#F3EFF5cc',
      'noteBorderColor': 'black',
      }
   }
 })
import { createVuetify } from "vuetify";
import { VDataTable } from "vuetify/components";

export const vuetify = createVuetify({
    theme: {
        defaultTheme: 'light',

        themes: {
            light: {
                colors: {
                    primary: '#6e11b0'
                }
            }
        }
    },
    components: {
        VDataTable
    }
})
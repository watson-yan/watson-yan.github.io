import gallery from './gallery.vue'
import slider from './slider.vue'
import pagination from './pagination.vue'

export default Vue => {
    Vue.component('gallery', gallery)
    Vue.component('slider', slider)
    Vue.component('pagination', pagination)
}
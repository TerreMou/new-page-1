import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

export const App = defineComponent({
  setup() {
    return () => (
      <>
        <header>
          导航
          <ul>
            <li>
              <RouterLink to="/">Bar</RouterLink>
            </li>
            <li>
              <RouterLink to="/foo">Foo</RouterLink>
            </li>
          </ul>
        </header>
        <RouterView></RouterView>
        <footer>页尾</footer>
      </>
    )
  },
})

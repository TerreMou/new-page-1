import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { Button } from '../shared/Button'
import { FloatButton } from '../shared/FloatButton'
import { Icon } from '../shared/Icon'
import s from './StartPage.module.scss'

export const StartPage = defineComponent({
  setup: (props, context) => {
    return () => (
      <>
        <div class={s.icon_wrapper}>
          <Icon name="pig" class={s.icon}></Icon>
        </div>
        <div class={s.button_wrapper}>
          <RouterLink to="/items/create">
            <Button class={s.button}>开始记账</Button>
          </RouterLink>
        </div>
        <RouterLink to="/items/create">
          <FloatButton iconName="add" />
        </RouterLink>
      </>
    )
  },
})

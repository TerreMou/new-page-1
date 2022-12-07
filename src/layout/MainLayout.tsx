import { defineComponent, PropType } from 'vue'
import s from './MainLayout.module.scss'

export const MainLayout = defineComponent({
  props: {
    title: {
      type: String as PropType<string>,
      required: true,
    },
    onClickIcon: {
      type: Function as PropType<() => void>, // TODO
    },
  },
  setup: (props, context) => {
    return () => (
      <>
        <nav class={s.navbar}>
          <span onClick={props.onClickIcon} class={s.icon_wrapper}>
            {context.slots.icon?.()}
          </span>
          <span class={s.title_wrapper}>{props.title}</span>
        </nav>
        {context.slots.default?.()}
      </>
    )
  },
})

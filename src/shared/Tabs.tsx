import { defineComponent, PropType } from 'vue'
import s from './Tabs.module.scss'

export const Tabs = defineComponent({
  props: {
    selected: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    return () => {
      const tabs = context.slots.default?.()
      if (!tabs) return () => null
      tabs.forEach((item) => {
        if (item.type !== Tab) {
          throw new Error('<Tabs> only accepts <Tab> as children')
        }
      })

      return (
        <div class={s.tabs}>
          <ol class={s.tabs_nav}>
            {tabs.map((item) => (
              <li
                class={props.selected === item.props?.name ? s.selected : ''}
                onClick={() =>
                  context.emit('update:selected', item.props?.name)
                }
              >
                {item.props?.name}
              </li>
            ))}
          </ol>
					<div>{tabs.find(item => item.props?.name === props.selected)}</div>
        </div>
      )
    }
  },
})

export const Tab = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    return () => <div>{context.slots.default?.()}</div>
  },
})

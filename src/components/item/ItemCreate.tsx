import { defineComponent, ref } from 'vue'
import s from './ItemCreate.module.scss'
import { MainLayout } from '../../layout/mainLayout'
import { Icon } from '../../shared/Icon'
import { Tab, Tabs } from '../../shared/Tabs'
import { InputPad } from './InputPad'

export const ItemCreate = defineComponent({
  setup: (props, context) => {
    const refKind = ref('支出')
    return () => (
      <MainLayout title="记一笔" onClickIcon={() => console.log('back...')}>
        {{
          icon: () => <Icon name="left"></Icon>,
          default: () => (
            <>
              <Tabs v-model:selected={refKind.value}>
                <Tab name="支出">outcome...</Tab>
                <Tab name="收入">income...</Tab>
              </Tabs>
              <div class={s.inputPad_wrapper}>
                <InputPad />
              </div>
            </>
          ),
        }}
      </MainLayout>
    )
  },
})

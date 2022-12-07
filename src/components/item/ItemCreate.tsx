import { defineComponent } from 'vue'
import { MainLayout } from '../../layout/mainLayout'
import { Icon } from '../../shared/Icon'

export const ItemCreate = defineComponent({
  setup: (props, context) => {
    return () => (
      <MainLayout title="记一笔" onClickIcon={() => console.log('back...')}>
        {{
          icon: () => <Icon name="left"></Icon>,
          default: () => <>
            <h1>here is content......</h1>
          </>
        }}
      </MainLayout>
    )
  },
})

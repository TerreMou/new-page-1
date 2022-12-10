import { defineComponent, ref } from 'vue'
import { Icon } from '../../shared/Icon'
import s from './InputPad.module.scss'
import { time } from '../../shared/time'
import { Popup, DatetimePicker } from 'vant'

export const InputPad = defineComponent({
  setup: (props, context) => {
    // 日期选择
    const now = new Date()
    const refDate = ref<Date>(now)
    const refDatePickerVisible = ref(false)
    const showDatePicker = () => {
      refDatePickerVisible.value = true
    }
    const hideDatePicker = () => {
      refDatePickerVisible.value = false
    }
    const setDate = (val: Date) => {
      refDate.value = val
      hideDatePicker()
    }

    // 记账金额输入
    const refAmount = ref('0')
    const appendText = (n: number | string) => {
      const input = n.toString()
      const dotIndex = refAmount.value.indexOf('.')
      if (refAmount.value.length >= 13) return
      if (dotIndex >= 0 && refAmount.value.length - dotIndex > 2) return // 保留小数点后两位
      switch (input) {
        case '.': {
          if (dotIndex >= 0) return
        }
          break;
        case '0': {
          if (refAmount.value === '0') return
        }
          break;
        default: {
          if (refAmount.value === '0') {
            refAmount.value = ''
          }
        }
          break;
      }
      refAmount.value += n.toString()
    }
    const buttons = [
      { text: '1', onClick: () => appendText(1) },
      { text: '2', onClick: () => appendText(2) },
      { text: '3', onClick: () => appendText(3) },
      { text: '4', onClick: () => appendText(4) },
      { text: '5', onClick: () => appendText(5) },
      { text: '6', onClick: () => appendText(6) },
      { text: '7', onClick: () => appendText(7) },
      { text: '8', onClick: () => appendText(8) },
      { text: '9', onClick: () => appendText(9) },
      { text: '0', onClick: () => appendText(0) },
      { text: '.', onClick: () => appendText('.') },
      { text: '清空', onClick: () => {refAmount.value = '0'} },
      { text: '提交', onClick: () => {} },
    ]

    return () => (
      <>
        <div class={s.dateAndAmount}>
          <span class={s.date}>
            <Icon class={s.icon} name="date" />
            <span>
              <span onClick={showDatePicker}>
                {time(refDate.value).format()}
              </span>
              <Popup
                position="bottom"
                v-model:show={refDatePickerVisible.value}
              >
                <DatetimePicker
                  value={refDate.value}
                  type="date"
                  title="选择年月日"
                  onConfirm={setDate}
                  onCancel={hideDatePicker}
                />
              </Popup>
            </span>
          </span>
          <span class={s.amount}>{refAmount.value}</span>
        </div>
        <div class={s.buttons}>
          {buttons.map((button) => {
            return <button onClick={button.onClick}>{button.text}</button>
          })}
        </div>
      </>
    )
  },
})

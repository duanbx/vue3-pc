import { defineComponent, type SlotsType, type PropType } from 'vue';

export default defineComponent({
  name: 'DemoButton',
  props: {
    onClick: Function as PropType<(e: MouseEvent) => void>,
  },
  slots: Object as SlotsType<{
    default: string | undefined;
  }>,
  setup(props, { slots }) {
    return () => (
      <button onClick={props.onClick}>{slots.default?.('111')}</button>
    );
  },
});

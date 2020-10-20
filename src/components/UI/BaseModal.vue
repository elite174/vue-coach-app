<template>
    <teleport to="body">
        <transition name="modal">
            <div v-if="visible" @click.self="closeModal" class="modal">
                <slot />
            </div>
        </transition>
    </teleport>
</template>

<script lang="ts">
import Vue, {
    defineComponent,
    PropType,
    toRefs,
    watch,
    watchEffect
} from 'vue';

interface Props {
    visible: boolean;
    onClose?: () => void;
}

export default defineComponent({
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        onClose: {
            type: Function as PropType<() => void>
        }
    },
    setup(props: Props) {
        const { visible } = toRefs(props);

        watch(visible, (newValue) => {
            document.body.style.overflow = newValue ? 'hidden' : 'initial';
        });
    },
    methods: {
        closeModal() {
            this.$props.onClose?.();
        }
    }
});
</script>

<style scoped>
.modal {
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100vh;
    overflow: auto;

    background: rgba(0, 0, 0, 0.8);
    transition: opacity 0.15s ease-out;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-to,
.modal-leave-from {
    opacity: 1;
}
</style>

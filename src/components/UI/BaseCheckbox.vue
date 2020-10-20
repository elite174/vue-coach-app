<template>
    <div class="checkbox">
        <input
            :checked="$props.checked"
            :name="$props.name"
            :id="$props.id"
            type="checkbox"
            class="check"
            @change="$props.onChange"
        />
        <label :for="$props.id">
            <slot />
        </label>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        checked: {
            type: Boolean
        },
        name: {
            type: String
        },
        id: {
            type: String
        },
        onChange: {
            type: Function
        }
    }
});
</script>

<style scoped>
.checkbox {
    display: inline-flex;
    align-items: center;
}

.check {
    margin-right: 10px;
}
</style>

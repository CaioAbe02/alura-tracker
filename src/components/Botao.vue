<template>
    <button class="button" @click="clicado" :disabled="desabilitado">
        <span class="icon">
            <i :class="icone"></i>
        </span>
        <span>{{texto}}</span>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Botao',
    emits: ['clicado'],
    props: {
        icone: {
            type: String,
            required: true
        },
        texto: {
            type: String,
            required: true
        },
        desabilitado: {
            type: Boolean,
            required: true
        }
    },

    methods: {
        clicado() {
            this.$emit('clicado')
        }
    }
});
</script>
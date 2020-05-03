<template>
  <div class="container">
      <h2 class="mb-5">Vue Editor</h2>
      <vue-editor ref="editor" v-model="content"
        @focus="onEditorFocus"
        @blur="onEditorBlur"
        @selection-change="onSelectionChange"
       />
      <button @click="setEditorContent">Set Editor Content</button>
      <button @click.prevent="focusEditor">Editor focus</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            content: ""
        }
    },
    methods: {
        setEditorContent() {
            this.content = "";
        },
        focusEditor() {
        this.$refs.editor.quill.focus();
        },
        onEditorBlur(quill) {
            console.log("editor blur!", quill);
        },

            onEditorFocus(quill) {
            console.log("editor focus!", quill);
        },

            onSelectionChange(range) {
            console.log("selection change!", range);
        }
    }
}
</script>

<style>

</style>
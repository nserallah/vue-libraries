<template>
  <div class="container">
      <h2>vue-quill</h2>
      <quill v-model="content" :config="config" @selection-change="selectionChange"></quill>
  </div>
</template>

<script>
export default {
    data() {
        return {
           content: {
                ops: [],
            },
           config: {
               
                placeholder: 'Compose an epic...',
            },
            formats: [
                {
                    name: 'custom',
                    options: {
                        attribute: 'custom',
                    },
                },
            ],
            keyBindings: [
                {
                    key: 's',
                    method: function(range) {
                        this.$dispatch('save', this.editor, range)
                        return false        
                    },
                },
            ]
        }
    },
    methods: {
    selectionChange(editor, range) {
        if (range) {
            if (range.start !== range.end) {
                this.selectedText = editor.getText(range.start, range.end)
                editor.formatText(range, 'custom', 'hello world')
            }
        }
    },
},

}
</script>

<style>

</style>
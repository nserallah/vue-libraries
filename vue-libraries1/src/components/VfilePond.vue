<template>
  <div class="container">
      <h2>vue-filepond</h2>

    <file-pond
        name="test"
        ref="pond"
        class-name="my-pond"
        label-idle="Drop files here..."
        allow-multiple="true"
        server="/api"
        accepted-file-types="image/jpeg, image/png"
        v-bind:files="myFiles"
        v-on:init="handleFilePondInit"/>

       

        
  </div>
</template>

<script>
// Import FilePond
import vueFilePond from 'vue-filepond';

// Import plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js';

// Import styles
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';

// Create FilePond component
const FilePond = vueFilePond( FilePondPluginFileValidateType, FilePondPluginImagePreview );
export default {
    components: {
        FilePond
    },
    data: function() {
        return { myFiles: [] };
    },
    methods: {
        handleFilePondInit: function() {
            console.log('FilePond has initialized');

            // example of instance method call on pond reference
            this.$refs.pond.getFiles();
        }
    },
}
</script>

<style>
.filepond--item {
    width: calc(50% - .5em);
}
@media (min-width: 30em) {
    .filepond--item {
        width: calc(50% - .5em);
    }
}

@media (min-width: 50em) {
    .filepond--item {
        width: calc(33.33% - .5em);
    }
}
.filepond--root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
        'Segoe UI Symbol';
}
/* use a hand cursor intead of arrow for the action buttons */
.filepond--file-action-button {
    cursor: pointer;
}

/* the text color of the drop label*/
.filepond--drop-label {
    color: #555;
}

/* underline color for "Browse" button */
.filepond--label-action {
    text-decoration-color: #aaa;
}

/* the background color of the filepond drop area */
.filepond--panel-root {
    background-color: #eee;
}

/* the border radius of the drop area */
.filepond--panel-root {
    border-radius: 0.5em;
}

/* the border radius of the file item */
.filepond--item-panel {
    border-radius: 0.5em;
}

/* the background color of the file and file panel (used when dropping an image) */
.filepond--item-panel {
    background-color: #555;
}

/* the background color of the drop circle */
.filepond--drip-blob {
    background-color: #999;
}

/* the background color of the black action buttons */
.filepond--file-action-button {
    background-color: rgba(0, 0, 0, 0.5);
}

/* the icon color of the black action buttons */
.filepond--file-action-button {
    color: white;
}

/* the color of the focus ring */
.filepond--file-action-button:hover,
.filepond--file-action-button:focus {
    box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.9);
}

/* the text color of the file status and info labels */
.filepond--file {
    color: white;
}

/* error state color */
[data-filepond-item-state*='error'] .filepond--item-panel,
[data-filepond-item-state*='invalid'] .filepond--item-panel {
    background-color: red;
}

[data-filepond-item-state='processing-complete'] .filepond--item-panel {
    background-color: green;
}

/* bordered drop area */
.filepond--panel-root {
    background-color: transparent;
    border: 2px solid #2c3340;
}
</style>
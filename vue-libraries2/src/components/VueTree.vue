<template>
 <div class="container">
     <h2>vue-jstree</h2>
      <v-jstree :data="data"
                :item-events="itemEvents"
                show-checkbox
                multiple
                allow-batch
                whole-row
                draggable
                >
        <template slot-scope="_">
            <div style="display: inherit; width: 200px" @click.ctrl="customItemClickWithCtrl">
                
                <i class="fas fa-folder fa-lg" role="presentation" v-if="!_.model.loading"></i>
                {{_.model.text}}
                <button style="border: 0px; background-color: transparent; cursor: pointer;" @click="removeNode(_.vm, _.model, $event)"><i class="fas fa-trash-alt"></i></button>
            </div>
        </template>
    </v-jstree>

                    

       
 </div>
</template>

<script>
import VJstree from 'vue-jstree'
export default {
    components: {
        VJstree
      },
      data() {
          return {
               msg: 'A Tree Plugin For Vue2',
                searchText: '',
                editingItem: {},
                editingNode: null,
                itemEvents: {
                    mouseover: function () {
                        console.log('mouseover')
                    },
                    contextmenu: function () {
                        console.log(arguments[2])
                        arguments[2].preventDefault()
                        console.log('contextmenu')
                    }
                },
              data:[
                {
                    "id": 0,
                    "text": "Same but with checkboxes",
                    "value": "Same but with checkboxes",
                    "icon": "",
                    "opened": false,
                    "selected": false,
                    "disabled": false,
                    "loading": false,
                    "children": [
                    {
                        "id": 1,
                        "text": "initially selected",
                        "value": "initially selected",
                        "icon": "",
                        "opened": false,
                        "selected": true,
                        "disabled": false,
                        "loading": false,
                        "children": []
                    },
                    {
                        "id": 2,
                        "text": "custom icon",
                        "value": "custom icon",
                        "icon": "fas fa-exclamation-triangle",
                        "opened": false,
                        "selected": false,
                        "disabled": false,
                        "loading": false,
                        "children": []
                    },
                    {
                        "id": 3,
                        "text": "initially open",
                        "value": "initially open",
                        "icon": "fas fa-exclamation-triangle",
                        "opened": true,
                        "selected": false,
                        "disabled": false,
                        "loading": false,
                        "children": [
                        {
                            "id": 4,
                            "text": "Another node",
                            "value": "Another node",
                            "icon": "",
                            "opened": false,
                            "selected": false,
                            "disabled": false,
                            "loading": false,
                            "children": []
                        }
                        ]
                    },
                    {
                        "id": 5,
                        "text": "custom icon",
                        "value": "custom icon",
                        "icon": "fa fa-warning icon-state-warning",
                        "opened": false,
                        "selected": false,
                        "disabled": false,
                        "loading": false,
                        "children": []
                    },
                    {
                        "id": 6,
                        "text": "disabled node",
                        "value": "disabled node",
                        "icon": "fa fa-check icon-state-success",
                        "opened": false,
                        "selected": false,
                        "disabled": true,
                        "loading": false,
                        "children": []
                    }
                    ]
                },
                {
                    "id": 7,
                    "text": "Same but with checkboxes",
                    "value": "Same but with checkboxes",
                    "icon": "",
                    "opened": true,
                    "selected": true,
                    "disabled": false,
                    "loading": false,
                    "children": [
                    {
                        "id": 12,
                        "text": "custom icon",
                        "value": "custom icon",
                        "icon": "fa fa-warning icon-state-warning",
                        "opened": false,
                        "selected": true,
                        "disabled": false,
                        "loading": false,
                        "children": []
                    }
                    ]
                },
                {
                    "id": 14,
                    "text": "And wholerow selection",
                    "value": "And wholerow selection",
                    "icon": "",
                    "opened": false,
                    "selected": false,
                    "disabled": false,
                    "loading": false,
                    "children": []
                },
                {
                    "id": 15,
                    "text": "drag disabled",
                    "value": "drag disabled",
                    "icon": "fa fa-warning icon-state-danger",
                    "opened": false,
                    "selected": false,
                    "disabled": false,
                    "loading": false,
                    "children": [],
                    "dragDisabled": true
                },
                {
                    "id": 16,
                    "text": "drop disabled",
                    "value": "drop disabled",
                    "icon": "fa fa-warning icon-state-danger",
                    "opened": false,
                    "selected": false,
                    "disabled": false,
                    "loading": false,
                    "children": [],
                    "dropDisabled": true
                }
                ]
          }
      },
      methods: {
        itemClick (node) {
          console.log(node.model.text + ' clicked !')
        },
        removeNode: function () {
                if (this.editingItem.id !== undefined) {
                    var index = this.editingNode.parentItem.indexOf(this.editingItem)
                    this.editingNode.parentItem.splice(index, 1)
                }
            }
      }
}
</script>

<style scoped>

</style>

<template>
  <div>
    <quill-editor class="quill"
                  v-model="contents"
                  :options="editorOption"
                  @change="change">
    </quill-editor>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        contents: '',
        editorOption: {
          theme: 'bubble',
          placeholder: "输入任何内容，支持html",
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              [{ 'list': 'ordered'}, { 'list': 'bullet' }],
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              [{ 'color': [] }, { 'background': [] }],
              [{ 'font': [] }],
              [{ 'align': [] }],
              ['link', 'image'],
              ['clean']
            ]
          }
        }
      }
    },
    methods: {
      change() {
        console.log(this.contents);
      }
    }
  }
</script>

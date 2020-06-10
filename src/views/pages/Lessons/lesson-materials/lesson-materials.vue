<template src="./lesson-materials.html"> </template>
<style lang="scss" src="./lesson-materials.scss" scoped> </style>

<script>
import { mapState } from 'vuex'
export default {
    data: () => ({
        isHightlited: false,
        files: [],
        formData: new FormData()
    }),
    computed: {
        ...mapState({
            lessonMaterials: (state) => state.lesson.lessonMaterials,
            user: (state) => state.auth.user
        })
    },
    mounted: function() {
        if (this.$refs.upload) {
            ['dragenter', 'dragover', 'dragleave'].forEach(eventName => {
                this.$refs.upload.addEventListener(eventName, this.preventDefaults, false)   
                document.body.addEventListener(eventName, this.preventDefaults, false)
            })
        }
    },
    methods: {
        preventDefaults (e) {
            e.preventDefault();
        },

        onDropFiles(event) {
            event.preventDefault()
            this.files = [...this.files, ...event.dataTransfer.files];
            this.unhighlight();
        },

        selectFiles(event) {
            this.files = [...this.files, ...event.target.files];
        },

        hightlight() {
            this.isHightlited = true;
        },

        unhighlight() {
            this.isHightlited = false;
        },

        removeFile(index) {
            this.files.splice(index, 1);
        },

        async addMaterials() {
            this.files.forEach(file => {
                this.formData.append('files', file)
            })

            await this.$store.dispatch('lesson/addLessonMaterials', {
                formData: this.formData, 
                lessonId: this.$route.params.id
            })
            this.files = [];
            this.formData = new FormData();
        },

        getFileLink(path) {
            return `${process.env.VUE_APP_BASE}${path}`;
        },

        removeUploadedFile(file) {
            this.$store.dispatch('lesson/removeLessonMaterial', {
                lessonId: this.$route.params.id,
                lessonMaterialId: file.id
            })
        },

        isAllowed(roles) {
            return roles.includes(this.user.roleName);
        }
    }
}
</script>

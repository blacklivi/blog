<template>
  <el-form
    ref="form"
    :model="controls"
    :rules="rules"
    @submit.native.prevent="onSubmit"
  >
    <h1 class="mb">
      Создать новый пост
    </h1>

    <el-form-item label="Введите название поста" prop="title">
      <el-input
        v-model.trim="controls.title"
      />
    </el-form-item>

    <el-form-item label="Текст в формате .md или .html" prop="text">
      <el-input
        v-model="controls.text"
        type="textarea"
        resize="none"
        :rows="10"
      />
    </el-form-item>

    <el-button class="mb" type="success" plain @click="previewDialog =true">
      предпросмор
    </el-button>
    <el-dialog title="Предросотр" :visible.sync="previewDialog">
      <div :key="controls.text">
        <vue-markdown>
          {{ controls.text }}
        </vue-markdown>
      </div>
    </el-dialog>

    <el-form-item>
      <el-button
        type="primary"
        native-type="submit"
        round
        :loading="loading"
      >
        Создать пост
      </el-button>
    </el-form-item>
    </el-button>
  </el-form>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  data () {
    return {
      previewDialog: false,
      loading: false,
      controls: {
        text: ''
      },
      rules: {
        text: [
          {
            required: true,
            message: 'Текст не должен быть пустым',
            trigger: 'blur'
          }
        ],
        title: [
          {
            required: true,
            message: 'Название поста не может быть пустым',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true
          const formData = {
            title: this.controls.title,
            text: this.controls.text
          }
          try {
            await this.$store.dispatch('post/create', formData)
            this.controls.text = ''
            this.controls.title = ''
            this.$message.success('Пост был успешно создан')
            this.loading = false
          } catch (e) {
            this.loading = false
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  width: 600px;
}
</style>

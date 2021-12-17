<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <event-hub></event-hub>
    <side-bar :sidebarLinks="sidebarLinks">
      <mobile-menu slot="content"></mobile-menu>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>
      <div class="content">
        <dashboard-content></dashboard-content>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardContent from './Content.vue'
import TopNavbar from './TopNavbar.vue'
import MobileMenu from './MobileMenu.vue'

export default {
  components: {
    DashboardContent,
    TopNavbar,
    MobileMenu
  },
  data() {
    return {
      sidebarLinks: [
        {
          title: 'global.dashboard',
          icon: 'dashboard',
          path: { name: 'dashboard' }
        },
        {
          title: 'cruds.userManagement.title',
          icon: 'person',
          path: { name: 'user_management' },
          gate: 'user_management_access',
          children: [
            {
              title: 'cruds.permission.title',
              icon: 'perm_data_setting',
              path: { name: 'permissions.index' },
              gate: 'permission_access'
            },
            {
              title: 'cruds.role.title',
              icon: 'group',
              path: { name: 'roles.index' },
              gate: 'role_access'
            },
            {
              title: 'cruds.user.title',
              icon: 'person',
              path: { name: 'users.index' },
              gate: 'user_access'
            }
          ]
        },
        {
          title: 'cruds.course.title',
          icon: 'table_view',
          path: { name: 'courses.index' },
          gate: 'course_access'
        },
        {
          title: 'cruds.lesson.title',
          icon: 'table_view',
          path: { name: 'lessons.index' },
          gate: 'lesson_access'
        },
        {
          title: 'cruds.test.title',
          icon: 'table_view',
          path: { name: 'tests.index' },
          gate: 'test_access'
        },
        {
          title: 'cruds.question.title',
          icon: 'table_view',
          path: { name: 'questions.index' },
          gate: 'question_access'
        },
        {
          title: 'cruds.questionOption.title',
          icon: 'table_view',
          path: { name: 'question_options.index' },
          gate: 'question_option_access'
        },
        {
          title: 'cruds.testResult.title',
          icon: 'table_view',
          path: { name: 'test_results.index' },
          gate: 'test_result_access'
        },
        {
          title: 'cruds.testAnswer.title',
          icon: 'table_view',
          path: { name: 'test_answers.index' },
          gate: 'test_answer_access'
        }
      ]
    }
  }
}
</script>

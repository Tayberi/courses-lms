import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const View = { template: '<router-view></router-view>' }

const routes = [
  {
    path: '/',
    component: () => import('@pages/Layout/DashboardLayout.vue'),
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@pages/Dashboard.vue'),
        meta: { title: 'global.dashboard' }
      },
      {
        path: 'user-management',
        name: 'user_management',
        component: View,
        redirect: { name: 'permissions.index' },
        children: [
          {
            path: 'permissions',
            name: 'permissions.index',
            component: () => import('@cruds/Permissions/Index.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/create',
            name: 'permissions.create',
            component: () => import('@cruds/Permissions/Create.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/:id',
            name: 'permissions.show',
            component: () => import('@cruds/Permissions/Show.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/:id/edit',
            name: 'permissions.edit',
            component: () => import('@cruds/Permissions/Edit.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'roles',
            name: 'roles.index',
            component: () => import('@cruds/Roles/Index.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/create',
            name: 'roles.create',
            component: () => import('@cruds/Roles/Create.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/:id',
            name: 'roles.show',
            component: () => import('@cruds/Roles/Show.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/:id/edit',
            name: 'roles.edit',
            component: () => import('@cruds/Roles/Edit.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'users',
            name: 'users.index',
            component: () => import('@cruds/Users/Index.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/create',
            name: 'users.create',
            component: () => import('@cruds/Users/Create.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/:id',
            name: 'users.show',
            component: () => import('@cruds/Users/Show.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/:id/edit',
            name: 'users.edit',
            component: () => import('@cruds/Users/Edit.vue'),
            meta: { title: 'cruds.user.title' }
          }
        ]
      },
      {
        path: 'courses',
        name: 'courses.index',
        component: () => import('@cruds/Courses/Index.vue'),
        meta: { title: 'cruds.course.title' }
      },
      {
        path: 'courses/create',
        name: 'courses.create',
        component: () => import('@cruds/Courses/Create.vue'),
        meta: { title: 'cruds.course.title' }
      },
      {
        path: 'courses/:id',
        name: 'courses.show',
        component: () => import('@cruds/Courses/Show.vue'),
        meta: { title: 'cruds.course.title' }
      },
      {
        path: 'courses/:id/edit',
        name: 'courses.edit',
        component: () => import('@cruds/Courses/Edit.vue'),
        meta: { title: 'cruds.course.title' }
      },
      {
        path: 'lessons',
        name: 'lessons.index',
        component: () => import('@cruds/Lessons/Index.vue'),
        meta: { title: 'cruds.lesson.title' }
      },
      {
        path: 'lessons/create',
        name: 'lessons.create',
        component: () => import('@cruds/Lessons/Create.vue'),
        meta: { title: 'cruds.lesson.title' }
      },
      {
        path: 'lessons/:id',
        name: 'lessons.show',
        component: () => import('@cruds/Lessons/Show.vue'),
        meta: { title: 'cruds.lesson.title' }
      },
      {
        path: 'lessons/:id/edit',
        name: 'lessons.edit',
        component: () => import('@cruds/Lessons/Edit.vue'),
        meta: { title: 'cruds.lesson.title' }
      },
      {
        path: 'tests',
        name: 'tests.index',
        component: () => import('@cruds/Tests/Index.vue'),
        meta: { title: 'cruds.test.title' }
      },
      {
        path: 'tests/create',
        name: 'tests.create',
        component: () => import('@cruds/Tests/Create.vue'),
        meta: { title: 'cruds.test.title' }
      },
      {
        path: 'tests/:id',
        name: 'tests.show',
        component: () => import('@cruds/Tests/Show.vue'),
        meta: { title: 'cruds.test.title' }
      },
      {
        path: 'tests/:id/edit',
        name: 'tests.edit',
        component: () => import('@cruds/Tests/Edit.vue'),
        meta: { title: 'cruds.test.title' }
      },
      {
        path: 'questions',
        name: 'questions.index',
        component: () => import('@cruds/Questions/Index.vue'),
        meta: { title: 'cruds.question.title' }
      },
      {
        path: 'questions/create',
        name: 'questions.create',
        component: () => import('@cruds/Questions/Create.vue'),
        meta: { title: 'cruds.question.title' }
      },
      {
        path: 'questions/:id',
        name: 'questions.show',
        component: () => import('@cruds/Questions/Show.vue'),
        meta: { title: 'cruds.question.title' }
      },
      {
        path: 'questions/:id/edit',
        name: 'questions.edit',
        component: () => import('@cruds/Questions/Edit.vue'),
        meta: { title: 'cruds.question.title' }
      },
      {
        path: 'question-options',
        name: 'question_options.index',
        component: () => import('@cruds/QuestionOptions/Index.vue'),
        meta: { title: 'cruds.questionOption.title' }
      },
      {
        path: 'question-options/create',
        name: 'question_options.create',
        component: () => import('@cruds/QuestionOptions/Create.vue'),
        meta: { title: 'cruds.questionOption.title' }
      },
      {
        path: 'question-options/:id',
        name: 'question_options.show',
        component: () => import('@cruds/QuestionOptions/Show.vue'),
        meta: { title: 'cruds.questionOption.title' }
      },
      {
        path: 'question-options/:id/edit',
        name: 'question_options.edit',
        component: () => import('@cruds/QuestionOptions/Edit.vue'),
        meta: { title: 'cruds.questionOption.title' }
      },
      {
        path: 'test-results',
        name: 'test_results.index',
        component: () => import('@cruds/TestResults/Index.vue'),
        meta: { title: 'cruds.testResult.title' }
      },
      {
        path: 'test-results/create',
        name: 'test_results.create',
        component: () => import('@cruds/TestResults/Create.vue'),
        meta: { title: 'cruds.testResult.title' }
      },
      {
        path: 'test-results/:id',
        name: 'test_results.show',
        component: () => import('@cruds/TestResults/Show.vue'),
        meta: { title: 'cruds.testResult.title' }
      },
      {
        path: 'test-results/:id/edit',
        name: 'test_results.edit',
        component: () => import('@cruds/TestResults/Edit.vue'),
        meta: { title: 'cruds.testResult.title' }
      },
      {
        path: 'test-answers',
        name: 'test_answers.index',
        component: () => import('@cruds/TestAnswers/Index.vue'),
        meta: { title: 'cruds.testAnswer.title' }
      },
      {
        path: 'test-answers/create',
        name: 'test_answers.create',
        component: () => import('@cruds/TestAnswers/Create.vue'),
        meta: { title: 'cruds.testAnswer.title' }
      },
      {
        path: 'test-answers/:id',
        name: 'test_answers.show',
        component: () => import('@cruds/TestAnswers/Show.vue'),
        meta: { title: 'cruds.testAnswer.title' }
      },
      {
        path: 'test-answers/:id/edit',
        name: 'test_answers.edit',
        component: () => import('@cruds/TestAnswers/Edit.vue'),
        meta: { title: 'cruds.testAnswer.title' }
      }
    ]
  }
]

export default new VueRouter({
  mode: 'history',
  base: '/admin',
  routes
})

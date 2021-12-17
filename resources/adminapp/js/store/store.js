import Vue from 'vue'
import Vuex from 'vuex'

import Alert from './modules/alert'
import I18NStore from './modules/i18n'

import PermissionsIndex from './cruds/Permissions'
import PermissionsSingle from './cruds/Permissions/single'
import RolesIndex from './cruds/Roles'
import RolesSingle from './cruds/Roles/single'
import UsersIndex from './cruds/Users'
import UsersSingle from './cruds/Users/single'
import CoursesIndex from './cruds/Courses'
import CoursesSingle from './cruds/Courses/single'
import LessonsIndex from './cruds/Lessons'
import LessonsSingle from './cruds/Lessons/single'
import TestsIndex from './cruds/Tests'
import TestsSingle from './cruds/Tests/single'
import QuestionsIndex from './cruds/Questions'
import QuestionsSingle from './cruds/Questions/single'
import QuestionOptionsIndex from './cruds/QuestionOptions'
import QuestionOptionsSingle from './cruds/QuestionOptions/single'
import TestResultsIndex from './cruds/TestResults'
import TestResultsSingle from './cruds/TestResults/single'
import TestAnswersIndex from './cruds/TestAnswers'
import TestAnswersSingle from './cruds/TestAnswers/single'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    Alert,
    I18NStore,
    PermissionsIndex,
    PermissionsSingle,
    RolesIndex,
    RolesSingle,
    UsersIndex,
    UsersSingle,
    CoursesIndex,
    CoursesSingle,
    LessonsIndex,
    LessonsSingle,
    TestsIndex,
    TestsSingle,
    QuestionsIndex,
    QuestionsSingle,
    QuestionOptionsIndex,
    QuestionOptionsSingle,
    TestResultsIndex,
    TestResultsSingle,
    TestAnswersIndex,
    TestAnswersSingle
  },
  strict: debug
})

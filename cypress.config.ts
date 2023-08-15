import { defineConfig } from 'cypress'
import plugins from './cypress/support/plugins'
import tasks from './cypress/support/tasks'
import esbuildPreprocessor from './cypress/support/esbuild-preprocessor'

export default defineConfig({
  viewportHeight: 600,
  viewportWidth: 600,

  e2e: {
    setupNodeEvents(on, config) {
      esbuildPreprocessor(on)
      tasks(on)
      return plugins(on, config)
    },
    baseUrl: 'https://2afo7guwib.execute-api.us-east-1.amazonaws.com/latest'
  }
})

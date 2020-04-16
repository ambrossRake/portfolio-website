pipeline{
  agent any

  stages{
    stage('Build'){
      steps{
          npm run 'ng build --no-aot --no-build-optimizer --prod --base-href /'
      }
    }
    stage('Deploy'){
      steps{
          npm run 'ngh'
      }
    }
  }

}

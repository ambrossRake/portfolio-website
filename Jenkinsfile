pipeline{
  agent any

  stages{
    stage('Build'){
      steps{
          npm 'ng build --no-aot --no-build-optimizer --prod --base-href /'
      }
    }
    stage('Deploy'){
      steps{
          npm 'ngh'
      }
    }
  }

}

pipeline{
  agent any

  stages{
    stage('Build'){
      steps{
          sh 'ng build --no-aot --no-build-optimizer --prod --base-href /'
      }
    }
    stage('Deploy'){
      steps{
          sh 'ngh'
      }
    }
  }

}

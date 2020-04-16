pipeline{
  agent any

  stages{
    stage('Build'){
      steps{
          bat 'ng build --no-aot --no-build-optimizer --prod --base-href /'
      }
    }
    stage('Deploy'){
      steps{
          bat 'ngh'
      }
    }
  }

}

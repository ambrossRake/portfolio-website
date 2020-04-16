pipeline{
  agent any

  stages{
    stage('Init'){
      steps{
          sh 'npm install'
          sh 'npm install -g angular-cli-ghpages'
      }
    }
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

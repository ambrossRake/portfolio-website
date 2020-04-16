pipeline{
  agent any

  stages{
    stage('Init'){
      steps{
        withNPM(){
          sh 'npm install'
          sh 'npm install -g angular-cli-ghpages'
        }
      }
    }
    stage('Build'){
      steps{
        withNPM(){
          sh 'ng build --no-aot --no-build-optimizer --prod --base-href /'
        }
      }
    }
    stage('Deploy'){
      steps{
        withNPM(){
          sh 'ngh'
        }

      }
    }
  }

}

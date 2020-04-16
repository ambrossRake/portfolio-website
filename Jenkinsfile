pipeline{
  agent any

  stages{
    stage('Init'){
      steps{
        npm install
        npm install -g angular-cli-ghpages
      }
    }
    stage('Build'){
      steps{
        ng build --no-aot --no-build-optimizer --prod --base-href /
      }
    }
    stage('Deploy'){
        steps{
          ngh
        }
    }
  }

}

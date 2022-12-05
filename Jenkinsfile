pipeline {
    
    agent any

    stages {
        stage('Initial_cleanup'){
            steps {

                dir ("${WORKSPACE}"){
                    deleteDir()
                }
                
            }
        }
        stage('checkout'){
            steps {

                script {
                    sh "pwd && ls"
                    sh "git clone https://github.com/madeniji017/bankapp_project_frontend.git"
                }
                
            }
        }
        stage("Build"){
            steps {
                script{
                    
                    sh "cd bankapp_project_frontend && npm install"
                   
                    
                }
            }
        }
        stage("Sonar Analysis"){
            steps{
                
                script{
                        sh "cd bankapp_project_frontend && sonar-scanner -Dsonar.projectKey=Frontend -Dsonar.host.url=http://127.0.0.1:9000 -Dsonar.login=1d11dbb031976e31a37aaf5a8493384dd98d41ea"
                }
            }
        }
        stage("Build image"){
            steps{
                script{
                    sh "cd bankapp_project_frontend && docker build -t mlarry/frontend_app:1.0 ."
                    
                }
            }
        }
        stage("Push image"){
            steps{
                script{
                    sh "docker login -u ${env.user} -p ${env.passwd}"
                    sh "docker push mlarry/frontend_app:1.0"
                }
            }

        }
         stage("Docker logout"){
            steps{
                script{
                    sh "docker logout"
                }
            }

        }

    }
}

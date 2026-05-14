pipeline {
    agent any

    environment {
        APP_DIR = '/var/www/sensay'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                sh '''
                    rsync -av --delete \
                        --exclude='.git' \
                        --exclude='node_modules' \
                        dist/ ${APP_DIR}/
                '''
            }
        }
    }

    post {
        success {
            echo "Build and deploy successful — https://sensay.uk"
        }
        failure {
            echo "Build failed — check console output above"
        }
        always {
            cleanWs()
        }
    }
}

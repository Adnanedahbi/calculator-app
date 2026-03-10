pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Récupération du code...'
                checkout scm
            }
        }

        stage('Install') {
            steps {
                echo 'Installation des dépendances...'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Lancement des tests...'
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                echo 'Build de l\'application...'
                sh 'echo "Build réussi - Application prête"'
            }
        }
    }

    post {
        success {
            echo 'Bravo, déploiement réussi !'
        }
        failure {
            echo 'Le pipeline a échoué. Vérifiez les logs.'
        }
    }
}
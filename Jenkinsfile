pipeline {
    agent any
    environment {
        BUILD_ID = 'dontKillMe'
        JENKINS_NODE_COOKIE = 'dontKillMe'
    }
    stages {
        stage('Deploy App') {
            steps {
                bat '''
                    @echo off
                    call npm ci
                    call npm run build
                    xcopy /E /I /Y "dist\\*" "C:\\ProgramData\\Jenkins\\.jenkins\\userContent\\todo"
                    start "" /B npx -y serve -s "C:\\ProgramData\\Jenkins\\.jenkins\\userContent\\todo" -l 9090
                '''
            }
        }
    }
}

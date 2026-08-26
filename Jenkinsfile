pipeline {
    agent any
    environment {
        BUILD_ID = 'dontKillMe'
    }
    stages {
        stage('Deploy') {
            steps {
                bat '''
                    call npm ci
                    call npm run build
                    xcopy /E /I /Y "dist\\*" "C:\\ProgramData\\Jenkins\\.jenkins\\userContent\\todo"
                    start "" /B npx serve -s "C:\\ProgramData\\Jenkins\\.jenkins\\userContent\\todo" -l 9090
                '''
            }
        }
    }
}

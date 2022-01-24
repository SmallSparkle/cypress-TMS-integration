How to run tests
Run tests 
```bash
npx cypress run --env allure=true
```

How to open report

serve report based on current "allure-results" folder: 
```bash 
allure serve
```
generate new report based on current "allure-results" folder: 
```bash 
allure generate
```

open generated report from "allure-report" folder: 
```bash 
allure open
```
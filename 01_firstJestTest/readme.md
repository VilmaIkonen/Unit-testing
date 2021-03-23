# Jest project

1. Create project folder
2. Create package.json 
```npm init -y```
3. Install Jest as development dependency
```npm install jest --save-dev```
(installation could be done as global with -g flag)
4. Modify package.json test script
```json

"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
},

```
-->
```json
 "scripts": {
    "test": "jest"
  },
  ```
5. Create test folder __tests__ (with 2 underscores before and after the folder name!)
6. Create tests
7. Run tests in terminal ```npm test```

const express = require('express')
const { exec } = require('child_process');
const app = express()
const port = 5050

app.get('/back', (req, res) => {
  res.send(aupdateService("back.yml"))
})

app.get('/front', (req, res) => {
  res.send(aupdateService("front.yml"))
})

const aupdateService = (file) => {
  exec("ls -la", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return "Error";
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return "Error";
    }
    console.log(`stdout: ${stdout}`);
    return "success";
  });
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

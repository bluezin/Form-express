const express = require("express");
const app = express();
const path = require("path");
// crate midleware
const multer = require("multer");
const upload = multer({ dest: "images/" });

app.get("/", (req, res) => {
  res.sendFile(path.resolve("index.html"));
});

//midleware interpreta la imagen en un multivor/form-data
//que key de nuestro form tiene la img
app.post("/", upload.single("image"), (req, res) => {
  console.log(req.file);
  req.body.username;
  res.status(200);
});


app.listen(3005, () => {
  console.log("app en el puerto 3005");
});

// Para enviar un formData a nuestro servidor se envia como multipart

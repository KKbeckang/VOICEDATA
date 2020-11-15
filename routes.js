const express = require("express");
const quickstart = require("./Speech2textapi")
const router = express.Router();

router.get("/s2t",async(req,res)=>{
    const translation = await quickstart.quickstart()
    res.send(translation);

    }
)


router.get("/", function(req, res) {
    // console.log("hello I'm on the start page");
    res.render("index");
});

module.exports = router;
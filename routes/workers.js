const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{

    res.status(200).json({success: true, msg: 'Show all workers '});
});
router.get('/:id',(req, res)=>{
    res.status(200).json({success:true,msg:`Show single worker ${req.params.id}`});
});
router.post('/',(req, res)=>{
    res.status(200).json({success:true,msg:'Create new worker'});
});
router.put('/:id',(req, res)=>{
    res.status(200).json({success:true,msg:`Update a worker ${req.params.id}`});
});
router.delete('/:id',(req, res)=>{
    res.status(200).json({success:true,msg:`Delete a worker ${(req.params.id)}`});
});
module.exports = router;